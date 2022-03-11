import {connect} from './src/javascripts/config/db/connect'
import {IrisFlower, FlashCard} from './src/javascripts/models/schemas.js'
import mongoose from 'mongoose';

// this will connect me to the mongo server 
// mongodb:// specifies what program ( protocall )
// localhost on whatever host connect will point to 
// port 27017 running locally 
// IrisFlower name of the database conneted to 

// mongoexport -c irisflower --uri="mongodb://localhost:27017/irisflower" 

//connect("mongodb://127.0.0.1:27017/flashcard2")
/*
console.log("making an entry");
console.log("saving the FlashCard")
console.log(realTest3);
*/
/*
const pronouns = new FlashCard({ group: "Pronouns", words: [{english:"I", german: "ich"}, {english:"you(informal)", german: "du"}, {english: "you(formal)", german: "Sie"}, {english: "he", german: "er"}, {english:"she", german: "sie"}, {english:"it", german: "es"}, {english:"we", german: "wir"}, {english:"you(plural)", german: "ihr"}, {english:"they", german: "sie"}]} );
pronouns.save();
const numbers = new FlashCard({ group: "Numbers", words: [{english:'zero', german:'null'}, {english:'one', german:'eins'}, {english:'two', german:'zwei'}, {english:'three', german:'drei'}, {english:'four', german:'vier'}, {english:'five', german:'fünf'}, {english:'six', german:'sechs'}, {english:'seven', german:'sieben'}, {english:'eight', german:'acht'}, {english:'nine', german:'neun'}, {english:'ten', german:'zehn'}]} );
numbers.save();
*/
/*
FlashCard.find().exec((err, flashcards) => {
    console.log("getting the stuff")
    if(err){
        console.log(err)
    }else{
        // print the records array
        console.log("deez are the records")
        console.log(flashcards)
    }
})

*/
// if I want to learn how to insert data from a file using JS. Json file 
// right now I am doing it manually  

// mongoexport -c flashcard --uri="mongodb://localhost:27017/flashcard" 

connect("mongodb://localhost:27017/irisflower")


IrisFlower.find().exec((err, irisflowers) => {
    console.log("getting the iris stuff")
    if(err){
        console.log(err)
    }else{
        console.log(irisflowers)
    }
})
