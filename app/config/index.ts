import { Config } from '@elements/application';

/**
 * Server only app config settings.
 */
export default Config.create((config: Config) => {
  // server
  config.set('server.port', 4000);
  config.set('server.ssl.on', !config.is('dev'));
  config.set('server.ssl.key', '');
  config.set('server.ssl.cert', '');
  config.set('server.log.hideTimeStamps', false);

  // session
  config.set('session.secret', '<%= random %>');
  config.set('session.loggedInExpires', undefined);
  config.set('session.loggedOutExpires', undefined);

  // database
  config.set('db.database', '<%= dashCaseName %>');
  config.set('db.host', 'localhost');
  config.set('db.user', process.env['USER']);
  config.set('db.password', '');

  // email smtp settings
  config.set('email.live', false);
  config.set('email.host', '');
  config.set('email.port', 465);
  config.set('email.user', '');
  config.set('email.password', '');
  config.set('email.from', '');
});
