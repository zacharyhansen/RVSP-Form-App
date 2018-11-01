const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/rsvps', (req, res) => {
  console.log('hit');
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
