import mongoose from "mongoose"

const Schema = mongoose.Schema

// key value pair ( single value )
let IrisFlowerSchema = new Schema ({
    sepalLength: Number, 
    sepalWidth: Number, 
    petalLength: Number, 
    petalWidth: Number, 
    species: String
})

let FlashCardWords = new Schema ({
    subwords: [String, String]
})

let FlashCardSchema = new Schema ({
    group: String,
// array of strings 
    words: [FlashCardWords]

    })

//  let you use schema into other files in this project 
export let IrisFlower = mongoose.model("IrisFlower", IrisFlowerSchema)
export let FlashCard = mongoose.model("FlashCard", FlashCardSchema)