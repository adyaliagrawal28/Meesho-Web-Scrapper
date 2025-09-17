require('dotenv').config({ path: 'config.env' });
const mongoose = require('mongoose');
const User = require('./models/usermodel');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    console.log('✅ Connected to MongoDB');

    const user = new User({ email: 'admin@test.com', name: 'Admin User' });

    await User.register(user, 'password123');  // this hashes the password

    console.log('✅ Admin user created');
    process.exit();
})
.catch((err) => {
    console.error('❌ Error:', err);
    process.exit(1);
});
