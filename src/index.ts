import * as express from 'express';

const PORT : number = 3000;
const app : express.Application = express();

app.get('/', (req, res) => {
    res.send('Ola!');
});

app.listen(PORT, () => {
    console.log(`Start on port ${PORT}`);
});