const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
// const router = require('./router');
const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
const server = http.createServer(app);
const io = socketio(server)



// app.get('/api/', cors(), async(req, res, next) => {
//   try {
//     const message = "Hello World!";
//     res.json({ message });
//   } catch (err) {
//     next(err);
//   }
// });

app.get('/', cors(), (req, res) => {
  // res.header('Access-Control-Allow-Origin', 'localhost:3000')
  res.send('Server is up and running');
});

app.use(cors())
// app.use(router);

io.on('connection', (socket) => {
  console.log('We have a new connnection!');
  socket.on('disconnect', () => {
    console.log('User has left')
  });
});




server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
