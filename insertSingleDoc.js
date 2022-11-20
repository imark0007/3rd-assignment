const { client } = require("./dbConfig");

const insertSingleDoc=async()=>{

    try {

        const database = client.db("mongoDB");
        const users = database.collection("users");

        const doc = {
            name: "BDLearner.Com",
            title: "Learn Something New Everyday",
            content: "No problem. Just insert a single document, in MongoDB and its a demo",
        }
        const result = await users.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);

    }catch (error){
        console.log(error);

    } finally{
        await client.close();
    }
}

insertSingleDoc();