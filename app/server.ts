import { Application } from '@elements/application';

/**
 * Server only code codes inside this callback function.
 */
export default function(app: Application) {
  // api v1 routes
  app.routes('/api/v1', require('app/routes/api/v1'));
}
