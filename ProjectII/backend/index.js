const connectToMongoose=require('./db')
const express = require('express')
const Admins = require('./models/Admins');

const app = express()
var cors = require('cors')
 
app.use(cors())
connectToMongoose();


const port=5000;

app.use(express.json());
app.get('/', (req, res) => {
})


app.use('/api/admin',require('./routes/login'));
app.use('/api/student',require('./routes/students'));

app.listen(port, () => {
  console.log(`Student Interest System listening on port http://localhost:${port}`)
})