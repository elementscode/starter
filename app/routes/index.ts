import { Router, IRequest } from '@elements/application';
import * as services from 'app/services';

let router = new Router();
export default router;

router.page('/', async function(this: IRequest) {
  this.title('Home');
  this.description('');
  this.render('app/pages/home', {
    subtitle: await services.getHelloWorld()
  });
});

router.page('/login', async function(this: IRequest) {
  this.title('Login');
  this.description('Login to your account.');
  this.render('app/pages/login');
});
