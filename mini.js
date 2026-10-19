const express = require ('express');
const app = express();
app.get('/student', (req, res) => {
  console.log(req.method);
  console.log(req.url);

  res.json({
    'name' : 'simran',
    'class' : 'Btech',
    'year': 3
  })
})