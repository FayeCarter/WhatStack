const express = require('express');
const http = require('http');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const router = require('./router');
const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
const server = http.createServer(app);
const io = require('socket.io')(server, { origins: 'http://localhost:3000'});

// app.get('/api/', cors(), async(req, res, next) => {
//   try {
//     const message = "Hello World!";
//     res.json({ message });
//   } catch (err) {
//     next(err);
//   }
// });


io.on('connection', (socket) => {
  console.log('We have a new connnection!');
  socket.on('disconnect', () => {
    console.log('User has left')
  });
});

app.use(router);


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})