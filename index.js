const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.route');
const port = 3000;
const app = express();
app.set('view engine',"pug");
app.set('views',"./views");

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))
app.get('/', (req, res) => res.send('hello baby'));

app.use('/users',userRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))