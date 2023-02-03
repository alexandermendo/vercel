const express = require('express');
const app = express();

app.get('/suma/*', (req, res) => {
  const userId = req.params[0];
  res.send(`User ID: ${userId}`);
});

app.listen(3000, () => {
  console.log('This wildcard Listening on port 3000');
});