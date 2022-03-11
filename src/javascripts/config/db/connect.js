import mongoose from 'mongoose'

// this funcion will connect to the database 
export function connect(uri){
    if(process.env.NODE_END === "production"){
        uri = process.env.MONGODB_URI
    }
// connects to the datebase 
    mongoose.connect(uri)
// logs info that we connected to the uri 
    mongoose.connection.on("connected", () => {
        console.log(`Connected to ${uri}`)
    }
    )
//  logs info that we errored and did not connect to uri 
    mongoose.connection.on("error", (err) => {
        console.log(`Connection Error ${err}`)
    })
// logs the dissconnect 
    mongoose.connection.on("disconnected", () => {
        console.log(`Disconnected from ${uri}`)
    })
}