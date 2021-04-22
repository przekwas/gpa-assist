import * as express from 'express';
import * as morgan from 'morgan';
import routes from './routes';
import { clientHandler, CLIENT_ROUTES } from './middlewares/client-handler';
import { globalErrors, notFoundHandler } from './middlewares/error-handlers';

const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);
app.get(CLIENT_ROUTES, clientHandler);
app.use(notFoundHandler);
app.use(globalErrors);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));