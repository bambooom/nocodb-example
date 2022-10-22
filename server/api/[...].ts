import { createRouter, defineEventHandler, useBase, readBody } from 'h3';

const router = createRouter();

// @todo: 把 nocodb 里的操作怎么全部移到这里
router
  .post('/v1/auth/user/signup', defineEventHandler(() => {
    return { token: 'token' };
  }))
  .get('/v1/version', defineEventHandler(() => {
    return { 'currentVersion': '0.98.1', 'releaseVersion': '0.98.1' };
  }))
  .get('/v1/db/meta/projects/', defineEventHandler(() => {
    return {
      list: [],
      pageInfo: {
        isFirstPage: true,
        isLastPage: true,
        page: 1,
        pageSize: 0,
        totalRows: 0,
      }
    }
  }))
  .post('/v1/db/meta/projects/', defineEventHandler(async (event) => {
    const body = await readBody(event);
    return {"is_meta":1,"id":"p_mkiimun6xbpxb0","title": body.title,"prefix":"nc_7qi7__","status":null,"description":null,"meta":null,"color":null,"uuid":null,"password":null,"roles":null,"deleted":0,"order":null,"created_at":"2022-10-22 16:49:51","updated_at":"2022-10-22 16:49:51","bases":[{"id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","alias":null,"meta":null,"is_meta":1,"type":"mysql2","inflection_column":"camelize","inflection_table":"camelize","created_at":"2022-10-22 16:49:51","updated_at":"2022-10-22 16:49:51"}]};
  }))
  .get('/v1/auth/user/me', defineEventHandler(() => {
    return {"isAuthorized":true,"id":"us_ryicvx2udxsjio","email":"nmz89825@gmail.com","email_verified":null,"firstname":null,"lastname":null,"roles":{"owner":true,"creator":true},"token_version":"ce472bc5fc62a5f4888e58ab4d53dec03e4d2e76ea39562b406824ed01398dacc46e3d9b1e10e2a8"}
  }))
  .get('/v1/db/meta/projects/p_mkiimun6xbpxb0', defineEventHandler(() => {
    return {"is_meta":1,"id":"p_mkiimun6xbpxb0","title":"try-add-new","prefix":"nc_7qi7__","status":null,"description":null,"meta":null,"color":null,"uuid":null,"password":null,"roles":null,"deleted":0,"order":null,"created_at":"2022-10-22 16:49:51","updated_at":"2022-10-22 16:49:51","bases":[{"id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","alias":null,"meta":null,"is_meta":1,"type":"mysql2","inflection_column":"camelize","inflection_table":"camelize","created_at":"2022-10-22 16:49:51","updated_at":"2022-10-22 16:49:51"}]}
  }))
  .get('/v1/db/meta/projects/p_mkiimun6xbpxb0/tables', defineEventHandler(() => {
    return {"list":[]}
  }))
  .get('/v1/db/meta/projects/p_mkiimun6xbpxb0/users', defineEventHandler(() => {
    return {
      "users":
      {
        "list":
          [
            { "id": "us_ryicvx2udxsjio", "email": "nmz89825@gmail.com", "invite_token": null, "main_roles": "user", "project_id": "p_mkiimun6xbpxb0", "roles": "owner" },
          ],
        "pageInfo": { "totalRows": 1, "page": 1, "pageSize": 10, "isFirstPage": true, "isLastPage": true }
      }
    }
  }))

  // @todo, add new table and add new row.

export default useBase('/api', router.handler);
