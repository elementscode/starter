import { Router, IRequest } from '@elements/application';

let router = new Router();
export default router;

// get /items
router.route('get', '/items', async function(this: IRequest) {
  this.status(200);
  this.header('X-ApiVersion', 'v1');
  this.json({ method: this.method, url: this.url });
});

// post /hello
router.route('post', '/items', async function(this: IRequest) {
  let item = this.params.get('item');
  this.status(200);
  this.header('X-ApiVersion', 'v1');
  this.json({ method: this.method, url: this.url, item: item });
});
