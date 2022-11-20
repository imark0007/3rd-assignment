const { client } = require("./dbConfig");


const updateMultipleDoc=async()=> {
    try {
        const database = client.db("mongoDB");
        const users2 = database.collection("users2");
        const filter = {};
        const updateDoc = {
            $set: {
                country: "Bangladesh",
                religion:"Islam"
            },
        };
        const result = await users2.updateMany(filter, updateDoc);
        console.log("Multiple Documents updated",result)
        console.log(`Updated ${result.modifiedCount} documents`);
    } catch (error) {
        console.log(error)
    }
    finally {
        await client.close();
    }
}
updateMultipleDoc()
