
import Debug from "debug";
import { createServer } from 'http';
import { app } from './app';
import { PORT } from './utils/config';

const debug = Debug("mean-server");
const port = PORT || 3000;
const server = createServer(app);

server.listen(port, () => {
    debug(`port number = ${port}`);
    console.log(`Server listening on port ${port}`);
});