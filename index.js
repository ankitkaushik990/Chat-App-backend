const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ original: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "acf88be6-5a86-4ca7-9459-daafe61e158f" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(response.data);
  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001, () => {
  console.log("app is listening on Port 3001");
});
