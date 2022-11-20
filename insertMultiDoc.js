const { client } = require("./dbConfig");

const insertMultiDoc=async()=>{

    try {

        const database = client.db("mongoDB");
        const users2 = database.collection("users2");

        const docs = [
            { name: "Arka", city: "Sylhet" },
            { name: "Rahim", roll: 7 },
            { name: "Jahin", study: false }
        ];
        const result = await users2.insertMany(docs);
        console.log(`${result.insertedCount} documents were inserted`);

    }catch (error){
        console.log(error);

    } finally{
        await client.close();
    }
}

insertMultiDoc();