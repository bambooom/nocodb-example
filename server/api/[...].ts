import { createRouter, defineEventHandler, useBase, readBody } from 'h3';

const router = createRouter();

let tables: any[] = [];

// @todo: 把 nocodb 里的操作怎么全部移到这里
router
  .get('/v1/version', defineEventHandler(() => {
    return { 'currentVersion': '0.98.1', 'releaseVersion': '0.98.1' };
  }))

  // @todo, add new table and add new row.

export default useBase('/api', router.handler);
