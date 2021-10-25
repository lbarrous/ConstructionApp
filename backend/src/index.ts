import * as http from 'http';
import app from './app';
import log from './logger';

const port: number = parseInt(process.env.PORT as string, 10) || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  /* eslint-disable no-console */
  log.info(`Server listing at http://localhost:${port}`);
  /* eslint-enable no-console */
});