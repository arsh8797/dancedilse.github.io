const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/arshkart', { useNewUrlParser: true , useUnifiedTopology: true });
//to check connection using listners
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we are connected")
});
//mongoose schema
var kittySchema = new mongoose.Schema({
    name: String
});


// const arshkitty = new Kitten({ name: 'arshad' });
// console.log(arshkitty.name);

kittySchema.methods.speak = function () {
    var greeting = "my name is " + this.name
    console.log(greeting);
}

//to convert the schema into models

var Kitten = mongoose.model('Kitten', kittySchema); //'kitten' is a argument and this creat the database with its pluraln name in mongod
//creating objects
var arshkitty = new Kitten({ name: 'arshad' });
console.log(arshkitty.name);
arshkitty.speak();

arshkitty.save(function (err, arshkitty) {
    if (err) return console.error(err);
    // fluffy.speak();
  });

  Kitten.find({name:arshkitty},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })