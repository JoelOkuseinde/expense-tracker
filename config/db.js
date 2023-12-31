const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParse: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDb Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1)
    }
}

module.exports = connectDB();