const { MongoClient } = require('mongodb');

// Use the new database name here
const uri = 'mongodb+srv://shashwat79802:79802@cluster0.ota7y4c.mongodb.net/MeeshoNewDB?retryWrites=true&w=majority&appName=Cluster0';

async function listCollections() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('✅ Connected to MongoDB');

        const db = client.db('MeeshoNewDB');  // Ensure using the new database name here
        const collections = await db.listCollections().toArray();

        console.log(`📂 Collections in database "MeeshoNewDB":`);
        collections.forEach(col => console.log(`- ${col.name}`));
    } catch (err) {
        console.error('❌ Error:', err);
    } finally {
        await client.close();
        console.log('🔌 Connection closed');
    }
}

listCollections();
