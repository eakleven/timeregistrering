const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const { users } = require('./db/user');
const { locations } = require('./db/locations');

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', '..', 'dist')));

app.post('/api/users', (req, res) => {
	const { name, wage } = req.body;
	users.push({ name, wage, id: users.length + 1 });
	res.status(201).end();
});

app.post('/api/locations', (req, res) => {
	const { name, category } = req.body;
	locations.push({ name, category, id: locations.length + 1 });
	res.status(201).end();
});

app.get('/api/users', (req, res) => {
	res.json(users);
});

app.get('/api/locations', (req, res) => {
	res.json(locations);
});

app.use((req, res, next) => {
	if (req.method !== 'GET' || req.path.startsWith('/api')) {
		return next();
	}
	res.sendFile(path.resolve(__dirname, '..', '..', 'dist', 'index.html'));
});

app.listen(3000, () => {
	console.log('Started on http://localhost:3000');
});
