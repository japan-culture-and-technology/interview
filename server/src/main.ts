import express from 'express';
import router from './presentation/router';

const app = express();
app.use('/api', router);

app.listen(4000, (): void => {
  console.log('Server is running at http://localhost:4000');
});

export default app;
