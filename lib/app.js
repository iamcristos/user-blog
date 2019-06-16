import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './router/user';

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRouter);
app.get('/', (req, res) => {
  res.send('Hello Welcome to my express app');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`app is listening at ${port}`);
});

export default app;
