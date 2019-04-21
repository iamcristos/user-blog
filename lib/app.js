import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import femiRoute from './router/try';

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(femiRoute);
app.get('/', (req, res) => {
  res.send('Hello Welcome to my express app');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`app is listening at ${port}`);
});

export default app;
