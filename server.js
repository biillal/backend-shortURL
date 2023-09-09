const express = require('express')
const app = express()
const cors = require('cors')


app.use(express.json())
const database = require('./config')
database()

app.use(cors({
    origin:"*"
}))

app.use('/api/url',require('./routes/urlRouter'))


app.listen(8000, () => console.log(`server raning with port 8000`))
