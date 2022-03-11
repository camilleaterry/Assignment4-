import mongoose from "mongoose"

const Schema = mongoose.Schema

// key value pair ( single value )
let IrisFlowerSchema = new Schema({
    sepalLength: Number, 
    sepalWidth: Number, 
    petalLength: Number, 
    petalWidth: Number, 
    species: String
})

let FlashCardWords = new Schema({
    english: String,
    german: String
})

let FlashCardSchema = new Schema({
    group: {type: String},
// array of strings 
    words: [FlashCardWords]

    })



//  let you use schema into other files in this project 
// mongoose.model("Name of Model", Schema defined above, "collection in the db")
export let IrisFlower = mongoose.model("IrisFlower", IrisFlowerSchema, "irisflower")
export let FlashCard = mongoose.model("FlashCard", FlashCardSchema, "flashcard")

