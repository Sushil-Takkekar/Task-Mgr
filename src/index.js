const path  = require('path');
const app = require('./express');   // contains express code without listen part
const PORT = process.env.PORT;

// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
    console.log('PRODUCTION = true');
    // set static folder
    app.use(express.static(path.join(__dirname, '../client/build')));

    // for non-existing route
    app.use('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log('Web-server started at port '+PORT);
});
