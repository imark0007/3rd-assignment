const { client } = require("./dbConfig");

const updateSingleDoc=async()=>{

    try {

        const database = client.db("mongoDB");
        const users2 = database.collection("users2");

        // create a filter for a movie to update
        const filter = { name: "Arka" };
        // this option instructs the method to create a document if no documents match the filter
        const options = { upsert: true };
        // create a document that sets the plot of the movie
        const updateDoc = {
            $set: {
                country: "Bangladesh"
            },
        };
        const result = await users2.updateOne(filter, updateDoc, options);
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );

    }catch (error){
        console.log(error);

    } finally{
        await client.close();
    }
}

updateSingleDoc();