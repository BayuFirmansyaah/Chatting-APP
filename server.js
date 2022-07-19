const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const config_session = require('./app/config/session/mongoSession');
const socket = require('./app/socket.io/socket');
const port = process.env.PORT || 3000;

// mongodb connect
require('./app/config/mongodb');

// socket io
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000']
    }
});

// logic io in here
socket(io);


// configuration
app.use(morgan('development'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join( __dirname, '/public/assets')))

// session
app.use(session(config_session));

// ejs engine
app.set('views', path.join( __dirname, 'app/views'));
app.set('view engine', 'ejs');

// routes here
const homeRouter = require('./app/routes/home');
const authRouter = require('./app/routes/auth');

// use router
app.use('/', homeRouter);
app.use('/auth', authRouter);

// page not found
app.use((req, res, next) => {
    res.send(404);
})

// runing server
server.listen(port, () => {
    console.log(`server running on port ${port}`);
})