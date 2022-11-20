const { client } = require("./dbConfig");

const deleteSingleDoc=async()=>{
    try {
        const database = client.db("mongoDB");
        const users2 = database.collection("users2");

        const query = { name: "Arka" };
        const result = await users2.deleteOne(query);
        console.log("Single document deleted",result)
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }
    } catch (error) {
        console.log(error)
    }finally {
        await client.close();
    }
}
deleteSingleDoc();