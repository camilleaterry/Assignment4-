import {connect} from './src/javascripts/config/db/connect'
import {IrisFlower, FlashCard} from './src/javascripts/models/schemas'
import mongoose from 'mongoose';

// this will connect me to the mongo server 
// mongodb:// specifies what program ( protocall )
// localhost on whatever host connect will point to 
// port 27017 running locally 
// IrisFlower name of the database conneted to 

// mongoexport -c irisflower --uri="mongodb://localhost:27017/irisflower" 

connect("mongodb://localhost:27017/flashcard")

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

// if I want to learn how to insert data from a file using JS. Json file 
// right now I am doing it manually  

// mongoexport -c flashcard --uri="mongodb://localhost:27017/flashcard" 
/*
connect("mongodb://localhost:27017/irisflower")

IrisFlower.find().exec((err, irisflowers) => {
    console.log("getting the iris stuff")
    if(err){
        console.log(err)
    }else{
        console.log(irisflowers)
    }
})
*/