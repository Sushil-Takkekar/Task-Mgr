const user_model_schema = require('../models/user_model');
const task_model_schema = require('../models/task_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sharp = require('sharp');
const email = require('../email/account');

const avatar = {
    res_header : 'image/png',
    width : 250,
    height: 250
}

// create new user
const create_user = (user) => {
    return new Promise((resolve, reject) => {
        try {
            const user_schema = new user_model_schema(user);
            // validate the user attributes at model level
            user_schema.validate((err) => {
                if(err) {
                    reject(err);
                }else {
                    bcrypt.hash(user_schema.password, 7).then((h_pwd) => {
                        user_schema.password = h_pwd;
                        user_schema.save().then(async (user) => {
                            email.sendWelcomeEmail(user.email, user.name);
                            const token = await user.generateAuthToken();   // call this model method using actual user object
                            resolve({ user, login: true, token});
                            resolve(user);
                        }).catch((err) => {
                            reject(err);
                        });
                    });    
                }
            });
        }catch(e) {
            reject(e);
        }
    });
}

// get all users
const get_all_users = () => {
    return new Promise((resolve, reject) => {
        user_model_schema.find().then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}

// delete all users
const delete_all_users = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await user_model_schema.deleteMany();
            resolve();
        }catch(e){
            reject(e);
        }
    });
}

// get single user by id
const get_user = (id) => {
    return new Promise((resolve, reject) => {
        user_model_schema.findById(id).then((data) => {
            if(!data)
                return resolve({});
            resolve(data);
        }).catch((err) => {
            reject(err);
        });        
    });
}

// update single user by id
const update_user = (id, updates) => {
    return new Promise((resolve, reject) => {
        if(updates.password != undefined || updates.password.trim()!="") {
            // validate update details
            if(updates.password.toLowerCase().includes('password') || updates.password.length<8) {
                return reject('Warning: weak password !');
            }
            bcrypt.hash(updates.password, 7).then((pwd) => {
                updates.password = pwd;
                user_model_schema.findByIdAndUpdate(id, updates, { new: true, runValidators: true}).then((data) => {
                    if(!data)
                        return resolve({});
                    resolve(data);
                }).catch((err) => {
                    reject(err);
                });
            });
        }else {            
            reject({ Error: "Something went wrong !" });
        }
    });
}

// delete user
const delete_user = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await task_model_schema.deleteMany({ owner: id});
            const user = await user_model_schema.findByIdAndRemove(id);
            email.sendAccDeleteEmail(user.email, user.name);
            resolve(user);
        }catch(e) {
            reject(e);
        }
    });
}

// upload avatar
const upload_avatar = (user, file) => {
    return new Promise(async (resolve, reject) => {
        try {
            const buffer = await sharp(file.buffer).resize({ width: avatar.width, height: avatar.height }).png().toBuffer();
            user.avatar = buffer;
            await user.save();  // store upadted user data to db
            //const data = await user_model_schema.findByIdAndUpdate(user._id, user, { new: true, runValidators: true});
            resolve();
        }catch(e) {
            reject(e);
        }
    });
};

// delete avatar
const delete_avatar = (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            user.avatar = undefined;
            await user.save();  // store upadted user data to db
            resolve();
        }catch(e) {
            reject(e);
        }
    });
};

// get avatar
const get_avatar = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await user_model_schema.findById(id);
            if(!user || !user.avatar)
                resolve();
            resolve(user);
        }catch(e) {
            reject(e);
        }
    });
};

// login user
const login_user = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await user_model_schema.findOne({ email });
            if(!user)
                throw new Error('Invalid Username/Password !'); // No such user exists
            const userValidation = await bcrypt.compare(password, user.password);
            if(!userValidation)
                throw new Error('Invalid Username/Password !'); // Invalid password
            // Generate JWT token
            const token = await user.generateAuthToken();   // call this model method using actual user object
            // store current token into db
            user.tokens.push({ token });
            const updated_user = await user_model_schema.findByIdAndUpdate(user._id , user, { new: true, runValidators: true});
            
            resolve({ user:updated_user, token});
        }catch(e) {
            reject(e);
        }
    });
}

// logout user
const logout_user = (user, token) => {
    return new Promise(async (resolve, reject) => {
        try {
            user.tokens = user.tokens.filter((item) => {
                return token!=item.token;
            });
            user.save();
            resolve({ msg: 'Logged out Successfully !'});
        }catch(e) {
            console.log(e);
            reject(e);
        }
    });
}

// add list
const add_list = (id, list) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await user_model_schema.findById(id);
            const pre_list = user.lists.filter((item) => item.title === list.title)
            if(pre_list.length > 0) {
                return reject({ Error: "List already exists!" })
            }
            user.lists.push({ title: list.title });
            const updated_user = await user.save();
            resolve(updated_user);
        }catch(err) {
            reject(err)
        }
    })
}

// update list count
const update_list_count = (user_id, list_id, val) => {
    return new Promise(async (resolve, reject) => {
        try {
            const updated_list = await user_model_schema.findOneAndUpdate({ '_id': user_id, 'lists._id': list_id }, { $inc: { 'lists.$.count': val }}, {new: true} );
            resolve(updated_list.lists.filter(item => item._id == list_id))
        }catch(err) {
            reject(err)
        }
    })
}

// get all lists
const get_all_lists = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await user_model_schema.findOne({ _id:id }, { lists:1, _id:0 });
            resolve(data.lists)
        }catch(err) {
            reject(err)
        }
    })
}

// Verify JWT auth token
const verifyAuthToken = (token) => {
    try {
        const user = jwt.verify(token.replace('Bearer ',''), process.env.JWT_AUTH_SECRET); // replace Bearer from token if exists
        return user;
    }catch(e) {
        return false
    }
}

// authenticate user
const authenticateUser = (id, token) => {
    const user = verifyAuthToken(token);
    if(!user) {
        return { Error: 'invalid auth signature' };
    }
    if(user._id === id) {
        return user;
    }else {
        return { Error: 'Un-authorized access' };
    }
}

module.exports = {
    create_user,
    get_all_users,
    get_user,
    update_user,
    delete_user,
    delete_all_users,
    upload_avatar,
    delete_avatar,
    get_avatar,
    login_user,
    logout_user,
    add_list,
    update_list_count,
    get_all_lists
}

/**
 * Example - Create user
 */
// const req = {
// 	name: 'John',
// 	email: 'john@gmail.com',
// 	password: 'john1234'
// }
// create_user(req).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });