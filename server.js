const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
var cors = require('cors');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
const models = require('./backend/models');

const tasks = require('./backend/api.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/tasks', tasks);

//Sync Database {force:true}
models.sequelize.sync().then(function(){
    console.log('Nice! Database looks fine');
}).catch(function(err){
console.log(err,"Something went wrong with the Database Update!");
});

app.listen(process.env.PORT || 3000);

module.exports = app;