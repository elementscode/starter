import {
  Application,
  IRequest,
  NotFoundError,
  NotAuthorizedError,
} from '@elements/application';

// create the elements application.
let app = new Application();
export default app;

// app meta data
app.title('Elements Application');
app.description('');

// server and browser app routes
app.routes('/', require('app/routes'));

// server only code.
app.server(require('./server'));

// url or data not found event
app.on('notFoundError', async function(this: IRequest, error: NotFoundError) {
  this.title('Not Found - Elements');
  this.render('app/pages/errors/not-found', {
    error: error
  });
});

// not authorized error event
app.on('notAuthorizedError', async function(this: IRequest, error: NotAuthorizedError) {
  this.render('app/pages/login');
});

// unhandled error event
app.on('unhandledError', async function(this: IRequest, error: any) {
  this.title('Unhandled Error - Elements');
  this.render('app/pages/errors/unhandled', {
    error: error
  });
});
