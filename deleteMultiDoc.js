const { client } = require("./dbConfig");

const deleteMultipleDocuments=async()=> {

    try {

        const database = client.db("mongoDB");
        const users2 = database.collection("users2");

        const query = { name: { $regex: "Rahim" } };
        const result = await users2.deleteMany(query);

        console.log("Multiple documents deleted",result)

        console.log("Deleted " + result.deletedCount + " documents");

    } catch (error) {

        console.log(error)

    }finally {

        await client.close();
    }
}
deleteMultipleDocuments();