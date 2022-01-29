const express = require('express');
const { mean, median, mode } = require('./calculator');

const app = express();

app.get('/', (req, res) => {
    return res.send("This is homepage");
});
app.get('/mean', (req, res) => {
  if(req.query.nums){
      let meanResult = mean(req.query.nums);
      return res.json(`response: { operation: 'mean', value: ${meanResult} }`);
  }else{
      return res.status(400).send("Nums are Required");
  }
});
app.get('/median', (req, res) => {
    if (req.query.nums) {
        let medianResult = median(req.query.nums);
        return res.json(`response: { operation: 'median', value: ${medianResult} }`);
    } else {
        return res.status(400).send("Nums are Required");
    }
});
app.get('/mode', (req, res) => {
    if (req.query.nums) {
        let modeResult = mode(req.query.nums);
        return res.json(`response: { operation: 'mode', value: ${modeResult} }`);
    } else {
        return res.status(400).send("Nums are Required");
    }
});

app.listen(3000, () => {
    console.log('listening on port 3000')
})