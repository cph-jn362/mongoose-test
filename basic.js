const express = require('express');
const mongoose = require('mongoose');
const Traveldestination = require('./models/traveldestination')

const URI = 'mongodb://localhost:27017/multipledoc-test';

const app = express();
const port = 3000;

mongoose.connect(URI, {useNewUrlParser : true, useUnifiedTopology : true})
.then((result) => app.listen(port))
.catch((err) => console.log(err));

app.get('/', (req,res) => {
    res.send('Hello there')
})

app.get('/add-doc', (req, res) => {
 const traveldestination = new Traveldestination({
    title : 'Tokyo',
    description : 'It is the capital of Japan',
    datefrom : '2021-03-09',
    dateto : '2021-03-20',
    countryname : 'japan',
    location: 'Tokyo',
    longtitude : 13.57463737,
    latitude : 58.26263647
 });
 traveldestination.save()
 .then((result) => {
    console.log(result);
    res.send(result);
 })
 .catch((err) => {
    console.log(err.message);
    res.status(403);
    res.send('ERROR: 403 Forbidden');
 })
})


app.get('/del-doc', (req, res) =>{
    Traveldestination.deleteOne({"title":"The little mermaid"})
    .then(() => {
        res.send('doc deleted');
    })
    .catch((err) => {
        console.log(err);
    })
})