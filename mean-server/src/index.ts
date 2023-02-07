
import { createServer } from 'http';
import { app } from './app';
import { PORT } from './utils/config';

const port = PORT || 3000;
const server = createServer(app);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});