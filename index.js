const express = require('express');
const app = express();

const PORT = process.env.PORT || 5555;

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
