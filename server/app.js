const express = require('express')
const dotenv  = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open',()=>{
    console.log('Database Connected Successfully');
})
app.use('/api', require('./routes'));

app.listen(PORT,()=>{
    console.log('Server running on the Port 4000')
})