const express = require('express');
const app = express();


const Port = 8000;

app.listen(Port, (err) => {
    if (err) {
      console.log(`Error in running server ${err}`);
      return;
    }
    console.log(`Server is up and running on Port ${Port}`);
  });

