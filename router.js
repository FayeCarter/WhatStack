const express = require("express");

const router = express.Router();
const fetch = require("node-fetch");
const cookieSession = require("cookie-session");
const cors = require("cors");

require("dotenv").config();

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
const cookie_secret = process.env.COOKIE_SECRET;

router.use(
  cookieSession({
    secret: cookie_secret,
  })
);

router.get("/", cors(), (req, res) => {
  res.send("Server is up and running");
});

router.get("/login", cors(), (req, res) => {
  const redirect_uri = "http://localhost:5000/login/callback";
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${redirect_uri}`
  );
});

async function getAccessToken({ code, client_id, client_secret }) {
  const request = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code,
    }),
  });
  const text = await request.text();
  const params = new URLSearchParams(text);
  return params.get("access_token");
}

async function fetchGitHubUser(token) {
  const request = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return await request.json();
}

router.get("/login/callback", cors(), async (req, res) => {
  const { code } = req.query;
  const access_token = await getAccessToken({
    code,
    client_id,
    client_secret,
  });
  const user = await fetchGitHubUser(access_token);
  if (user) {
    req.session.access_token = access_token;
    req.session.githubname = user.login;
    req.session.githubID = user.id;
    res.redirect(
      `http://localhost:3000/rooms?username=${user.login}&id=${user.id}`
    );
  } else {
    res.send("Login did not succeed!");
  }
});

router.get("/user", cors(), (req, res) => {
  if (req.session.githubname) {
    res.json({
      user: {
        id: req.session.githubID,
        username: req.session.githubname,
      },
    });
  } else {
    res.send("Not coming in");
  }
});

module.exports = router;
