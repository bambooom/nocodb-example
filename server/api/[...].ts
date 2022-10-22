import { createRouter, defineEventHandler, useBase } from 'h3';

const router = createRouter();

// @todo: 把 nocodb 里的操作怎么全部移到这里
router.post('/v1/auth/user/signup', defineEventHandler(event => {

}))

router.get('/v1/hello', defineEventHandler(event => {
  console.log(event.req, event.res);
  return 'Hello';
}));
router.get('/v1/hello/world', defineEventHandler(event => 'Hello World'));

export default useBase('/api', router.handler);
