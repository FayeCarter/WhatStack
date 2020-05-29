const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
const server = http.createServer(app);
const io = socketio(server);
require("dotenv").config()
const fetch = require('node-fetch')
const cookieSession = require('cookie-session')

const client_id=process.env.GITHUB_CLIENT_ID
const client_secret=process.env.GITHUB_CLIENT_SECRET
const cookie_secret = process.env.COOKIE_SECRET

app.use(
  cookieSession({
    secret: cookie_secret
  })
)

app.get("/", cors(), (req, res) => {
  res.send("Server is up and running");
});

app.get("/login", cors(), (req, res) => {
  const redirect_uri = "http://localhost:5000/login/callback";
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${redirect_uri}`
  );
});

async function getAccessToken({ code, client_id, client_secret }) {
  const request = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code
    })
  });
  const text = await request.text();
  const params = new URLSearchParams(text);
  return params.get("access_token");
}

async function fetchGitHubUser(token) {
  const request = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: "token " + token
    }
  });
  return await request.json();
}

app.get("/login/callback", cors(), async (req, res) => {
  const code = req.query.code;
  const access_token = await getAccessToken({ code, client_id, client_secret });
  const user = await fetchGitHubUser(access_token);
  if (user) {
    req.session.access_token = access_token;
    req.session.githubname = user.login;
    res.redirect("/user");
  } else {
    res.send("Login did not succeed!");
  }
});

app.get('/user', cors(), (req, res) => {
  if(req.session.githubname) {
    res.send(`Hi ${req.session.githubname}`)
  } else {
    res.send('Not coming in')
  }
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("We have a new connnection!");
  socket.on("join", ({ name }) => {
    console.log(name);
  });
  socket.on("disconnect", () => {
    console.log("User has left");
  });
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
