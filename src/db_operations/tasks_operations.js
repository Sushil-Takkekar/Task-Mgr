const task_schema = require('../models/task_model');
const user = require('./users_operations')

// create new task
const create_task = (task) => {
    return new Promise((resolve, reject) => {
        new task_schema(task).save().then((data) => {
            // increment list count if list is tagged
            if(task.list) {
                user.update_list_count(task.owner, task.list, 1).then((updated_list) => {
                    return resolve({ data, updated_list})
                }).catch(() => {
                    return resolve(data);
                })
            }
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}

// get all tasks of a user
const get_all_tasks = ({ owner, list, status, limit, skip, sortBy, till_date }) => {
    return new Promise((resolve, reject) => {
        const filter = { owner };
        const sort = {};
        if(till_date) {
            filter.due_date = { $lte : new Date(till_date) }
        }
        if(list) {
            filter.list = list;
        }
        if(status) {
            filter.completed = status === "true";
        }
        if(sortBy) {
            sort[sortBy.split('_')[0]] = (sortBy.split('_')[1] === 'asc' ? 1:-1);   // set sorting criteria => Ex. sort: { createdAt : 1 }
        }

        task_schema.find(filter, null, { limit, skip, sort }).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}

// get single task by id
const get_task = (id, owner) => {
    return new Promise((resolve, reject) => {
        task_schema.findOne({ _id: id, owner }).then((data) => {
            if(!data)
                return resolve({});
            resolve(data);
        }).catch((err) => {
            reject({ Error : 'No such task exists !' });
        });
    });
}

// update single task by id
const update_task = (id, owner, updates) => {
    return new Promise((resolve, reject) => {
        const new_list = updates.list;
        task_schema.findOneAndUpdate({ _id: id, owner }, updates, { runValidators: true}).then((data) => {
            if(!data)
                return resolve({});
            const pre_list = data.list;
            // if the list, mapped to task is changed
            if(new_list !== pre_list) {
                user.update_list_count(owner, pre_list, -1).then((res) => {
                    user.update_list_count(owner, new_list, 1).then((res) => {
                        resolve(data);
                    }).catch((err) => {
                        reject({ Error : 'Error in updating list info !' });
                    });
                }).catch((err) => {
                    reject({ Error : 'Error in updating list info !' });
                });
            }
            resolve(data);
        }).catch((err) => {
            reject({ Error : 'No such task exists !' });
        });
    });
}

// delete task by id
const delete_task = (id, owner) => {
    return new Promise((resolve, reject) => {
        task_schema.findOneAndDelete({ _id : id, owner}).then((data) => {
            if(!data)
                return resolve({ Error : 'No such task exists !' });
            // decrement list count
            user.update_list_count(data.owner, data.list, -1).then((updated_list) => {
                resolve({ msg: 'Task deleted sucessfully !' });
            }).catch((err) => {
                reject({ Error : 'No such task exists !' });
            });
        }).catch((err) => {
            reject({ Error : 'No such task exists !' });
        });
    });
}

module.exports = {
    create_task,
    get_all_tasks,
    get_task,
    update_task,
    delete_task
}