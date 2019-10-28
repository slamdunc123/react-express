const express = require('express');

const app = express();

const port = 5000;

app.listen(port, () => console.log(`Server started on post ${port}`));

// Get the local data.json file
const customers = require('./customers.json');

// routes
app.get('/api/customers', (req, res) => {
	res.json(customers);
});
