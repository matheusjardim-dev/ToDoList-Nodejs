const app = require('./app');

app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.listen(3333, () => console.log('Server running on port 3333'));
