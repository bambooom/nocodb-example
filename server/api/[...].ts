import { createRouter, defineEventHandler, useBase, readBody } from 'h3';

const router = createRouter();

let tables: any[] = [];

// @todo: 把 nocodb 里的操作怎么全部移到这里
router
  .post('/v1/auth/user/signup', defineEventHandler(() => {
    return { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5tejg5ODI1QGdtYWlsLmNvbSIsImZpcnN0bmFtZSI6bnVsbCwibGFzdG5hbWUiOm51bGwsImlkIjoidXNfcnlpY3Z4MnVkeHNqaW8iLCJyb2xlcyI6ImNyZWF0b3IiLCJ0b2tlbl92ZXJzaW9uIjoiY2U0NzJiYzVmYzYyYTVmNDg4OGU1OGFiNGQ1M2RlYzAzZTRkMmU3NmVhMzk1NjJiNDA2ODI0ZWQwMTM5OGRhY2M0NmUzZDliMWUxMGUyYTgiLCJpYXQiOjE2NjY0OTUwODEsImV4cCI6MTY2NjUzMTA4MX0.JdNVS351KI2opPYWlHJ0YizgOda7utzVA1f6GsUvSi8' }
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
    return {"is_meta":1,"id":"p_mkiimun6xbpxb0","title":"my-first-project","prefix":"nc_7qi7__","status":null,"description":null,"meta":null,"color":null,"uuid":null,"password":null,"roles":null,"deleted":0,"order":null,"created_at":"2022-10-22 16:49:51","updated_at":"2022-10-22 16:49:51","bases":[{"id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","alias":null,"meta":null,"is_meta":1,"type":"mysql2","inflection_column":"camelize","inflection_table":"camelize","created_at":"2022-10-22 16:49:51","updated_at":"2022-10-22 16:49:51"}]}
  }))
  .get('/v1/db/meta/projects/p_mkiimun6xbpxb0/tables', defineEventHandler(() => {
    return {"list": tables}
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
  .post('/v1/db/meta/projects/p_mkiimun6xbpxb0/tables', defineEventHandler(async (event) => {
    const body = await readBody(event);
    let newTable = { "id": "md_kio36vmscfv8bg", "base_id": "ds_8e44rwkxvzemt1", "project_id": "p_mkiimun6xbpxb0", "table_name": "nc_7qi7__books", "title": "books", "type": "table", "meta": null, "schema": null, "enabled": 1, "mm": 0, "tags": null, "pinned": null, "deleted": null, "order": 1, "created_at": "2022-10-23 02:02:31", "updated_at": "2022-10-23 02:02:31", "columns": [{ "id": "cl_ut2cr09yr276q7", "base_id": "ds_8e44rwkxvzemt1", "project_id": "p_mkiimun6xbpxb0", "fk_model_id": "md_kio36vmscfv8bg", "title": "Id", "column_name": "id", "uidt": "ID", "dt": "int", "np": "11", "ns": "0", "clen": null, "cop": "1", "pk": 1, "pv": null, "rqd": 1, "un": 1, "ct": "int(11) unsigned", "ai": 1, "unique": 0, "cdf": null, "cc": "", "csn": null, "dtx": "specificType", "dtxp": "11", "dtxs": "0", "au": 0, "validate": null, "virtual": null, "deleted": null, "system": 0, "order": 1, "created_at": "2022-10-23 02:02:32", "updated_at": "2022-10-23 02:02:32", "meta": null }, { "id": "cl_e12g7intvvneyr", "base_id": "ds_8e44rwkxvzemt1", "project_id": "p_mkiimun6xbpxb0", "fk_model_id": "md_kio36vmscfv8bg", "title": "Title", "column_name": "title", "uidt": "SingleLineText", "dt": "varchar", "np": null, "ns": null, "clen": "45", "cop": "2", "pk": 0, "pv": 1, "rqd": 0, "un": 0, "ct": "varchar(45)", "ai": 0, "unique": 0, "cdf": null, "cc": "", "csn": "utf8mb4", "dtx": "specificType", "dtxp": "45", "dtxs": null, "au": 0, "validate": null, "virtual": null, "deleted": null, "system": 0, "order": 2, "created_at": "2022-10-23 02:02:32", "updated_at": "2022-10-23 02:02:32", "meta": null }, { "id": "cl_rx0f4hzvib1pj0", "base_id": "ds_8e44rwkxvzemt1", "project_id": "p_mkiimun6xbpxb0", "fk_model_id": "md_kio36vmscfv8bg", "title": "CreatedAt", "column_name": "created_at", "uidt": "DateTime", "dt": "timestamp", "np": null, "ns": null, "clen": null, "cop": "3", "pk": 0, "pv": null, "rqd": 0, "un": 0, "ct": "timestamp", "ai": 0, "unique": 0, "cdf": "CURRENT_TIMESTAMP", "cc": "", "csn": null, "dtx": "specificType", "dtxp": "0", "dtxs": null, "au": 0, "validate": null, "virtual": null, "deleted": null, "system": 0, "order": 3, "created_at": "2022-10-23 02:02:32", "updated_at": "2022-10-23 02:02:32", "meta": null }, { "id": "cl_9pocg34ee0r9rh", "base_id": "ds_8e44rwkxvzemt1", "project_id": "p_mkiimun6xbpxb0", "fk_model_id": "md_kio36vmscfv8bg", "title": "UpdatedAt", "column_name": "updated_at", "uidt": "DateTime", "dt": "timestamp", "np": null, "ns": null, "clen": null, "cop": "4", "pk": 0, "pv": null, "rqd": 0, "un": 0, "ct": "timestamp", "ai": 0, "unique": 0, "cdf": "CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP", "cc": "", "csn": null, "dtx": "specificType", "dtxp": "0", "dtxs": null, "au": 0, "validate": null, "virtual": null, "deleted": null, "system": 0, "order": 4, "created_at": "2022-10-23 02:02:33", "updated_at": "2022-10-23 02:02:33", "meta": null }], "views": [{ "id": "vw_3hj5efjadyoii9", "base_id": "ds_8e44rwkxvzemt1", "project_id": "p_mkiimun6xbpxb0", "fk_model_id": "md_kio36vmscfv8bg", "title": "books", "type": 3, "is_default": 1, "show_system_fields": null, "lock_type": "collaborative", "uuid": null, "password": null, "show": 1, "order": 1, "created_at": "2022-10-23 02:02:31", "updated_at": "2022-10-23 02:02:31", "meta": null, "view": { "fk_view_id": "vw_3hj5efjadyoii9", "base_id": "ds_8e44rwkxvzemt1", "project_id": "p_mkiimun6xbpxb0", "uuid": null, "created_at": "2022-10-23 02:02:31", "updated_at": "2022-10-23 02:02:31", "meta": null } }], "columnsById": { "cl_ut2cr09yr276q7": { "id": "cl_ut2cr09yr276q7", "base_id": "ds_8e44rwkxvzemt1", "project_id": "p_mkiimun6xbpxb0", "fk_model_id": "md_kio36vmscfv8bg", "title": "Id", "column_name": "id", "uidt": "ID", "dt": "int", "np": "11", "ns": "0", "clen": null, "cop": "1", "pk": 1, "pv": null, "rqd": 1, "un": 1, "ct": "int(11) unsigned", "ai": 1, "unique": 0, "cdf": null, "cc": "", "csn": null, "dtx": "specificType", "dtxp": "11", "dtxs": "0", "au": 0, "validate": null, "virtual": null, "deleted": null, "system": 0, "order": 1, "created_at": "2022-10-23 02:02:32", "updated_at": "2022-10-23 02:02:32", "meta": null }, "cl_e12g7intvvneyr": { "id": "cl_e12g7intvvneyr", "base_id": "ds_8e44rwkxvzemt1", "project_id": "p_mkiimun6xbpxb0", "fk_model_id": "md_kio36vmscfv8bg", "title": "Title", "column_name": "title", "uidt": "SingleLineText", "dt": "varchar", "np": null, "ns": null, "clen": "45", "cop": "2", "pk": 0, "pv": 1, "rqd": 0, "un": 0, "ct": "varchar(45)", "ai": 0, "unique": 0, "cdf": null, "cc": "", "csn": "utf8mb4", "dtx": "specificType", "dtxp": "45", "dtxs": null, "au": 0, "validate": null, "virtual": null, "deleted": null, "system": 0, "order": 2, "created_at": "2022-10-23 02:02:32", "updated_at": "2022-10-23 02:02:32", "meta": null }, "cl_rx0f4hzvib1pj0": { "id": "cl_rx0f4hzvib1pj0", "base_id": "ds_8e44rwkxvzemt1", "project_id": "p_mkiimun6xbpxb0", "fk_model_id": "md_kio36vmscfv8bg", "title": "CreatedAt", "column_name": "created_at", "uidt": "DateTime", "dt": "timestamp", "np": null, "ns": null, "clen": null, "cop": "3", "pk": 0, "pv": null, "rqd": 0, "un": 0, "ct": "timestamp", "ai": 0, "unique": 0, "cdf": "CURRENT_TIMESTAMP", "cc": "", "csn": null, "dtx": "specificType", "dtxp": "0", "dtxs": null, "au": 0, "validate": null, "virtual": null, "deleted": null, "system": 0, "order": 3, "created_at": "2022-10-23 02:02:32", "updated_at": "2022-10-23 02:02:32", "meta": null }, "cl_9pocg34ee0r9rh": { "id": "cl_9pocg34ee0r9rh", "base_id": "ds_8e44rwkxvzemt1", "project_id": "p_mkiimun6xbpxb0", "fk_model_id": "md_kio36vmscfv8bg", "title": "UpdatedAt", "column_name": "updated_at", "uidt": "DateTime", "dt": "timestamp", "np": null, "ns": null, "clen": null, "cop": "4", "pk": 0, "pv": null, "rqd": 0, "un": 0, "ct": "timestamp", "ai": 0, "unique": 0, "cdf": "CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP", "cc": "", "csn": null, "dtx": "specificType", "dtxp": "0", "dtxs": null, "au": 0, "validate": null, "virtual": null, "deleted": null, "system": 0, "order": 4, "created_at": "2022-10-23 02:02:33", "updated_at": "2022-10-23 02:02:33", "meta": null } } }
    tables.push(newTable);
    return newTable;
  }))
  .get('/v1/db/meta/tables/md_kio36vmscfv8bg', defineEventHandler(() => {
    return {"id":"md_kio36vmscfv8bg","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","table_name":"nc_7qi7__books","title":"books","type":"table","meta":null,"schema":null,"enabled":1,"mm":0,"tags":null,"pinned":null,"deleted":null,"order":1,"created_at":"2022-10-23 02:02:31","updated_at":"2022-10-23 02:02:31","columns":[{"id":"cl_ut2cr09yr276q7","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","fk_model_id":"md_kio36vmscfv8bg","title":"Id","column_name":"id","uidt":"ID","dt":"int","np":"11","ns":"0","clen":null,"cop":"1","pk":1,"pv":null,"rqd":1,"un":1,"ct":"int(11) unsigned","ai":1,"unique":0,"cdf":null,"cc":"","csn":null,"dtx":"specificType","dtxp":"11","dtxs":"0","au":0,"validate":null,"virtual":null,"deleted":null,"system":0,"order":1,"created_at":"2022-10-23 02:02:32","updated_at":"2022-10-23 02:02:32","meta":null},{"id":"cl_e12g7intvvneyr","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","fk_model_id":"md_kio36vmscfv8bg","title":"Title","column_name":"title","uidt":"SingleLineText","dt":"varchar","np":null,"ns":null,"clen":"45","cop":"2","pk":0,"pv":1,"rqd":0,"un":0,"ct":"varchar(45)","ai":0,"unique":0,"cdf":null,"cc":"","csn":"utf8mb4","dtx":"specificType","dtxp":"45","dtxs":null,"au":0,"validate":null,"virtual":null,"deleted":null,"system":0,"order":2,"created_at":"2022-10-23 02:02:32","updated_at":"2022-10-23 02:02:32","meta":null},{"id":"cl_rx0f4hzvib1pj0","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","fk_model_id":"md_kio36vmscfv8bg","title":"CreatedAt","column_name":"created_at","uidt":"DateTime","dt":"timestamp","np":null,"ns":null,"clen":null,"cop":"3","pk":0,"pv":null,"rqd":0,"un":0,"ct":"timestamp","ai":0,"unique":0,"cdf":"CURRENT_TIMESTAMP","cc":"","csn":null,"dtx":"specificType","dtxp":"0","dtxs":null,"au":0,"validate":null,"virtual":null,"deleted":null,"system":0,"order":3,"created_at":"2022-10-23 02:02:32","updated_at":"2022-10-23 02:02:32","meta":null},{"id":"cl_9pocg34ee0r9rh","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","fk_model_id":"md_kio36vmscfv8bg","title":"UpdatedAt","column_name":"updated_at","uidt":"DateTime","dt":"timestamp","np":null,"ns":null,"clen":null,"cop":"4","pk":0,"pv":null,"rqd":0,"un":0,"ct":"timestamp","ai":0,"unique":0,"cdf":"CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP","cc":"","csn":null,"dtx":"specificType","dtxp":"0","dtxs":null,"au":0,"validate":null,"virtual":null,"deleted":null,"system":0,"order":4,"created_at":"2022-10-23 02:02:33","updated_at":"2022-10-23 02:02:33","meta":null}],"views":[{"ptn":"nc_7qi7__books","_ptn":"books","ptype":"table","tn":"books","_tn":"books","id":"vw_3hj5efjadyoii9","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","fk_model_id":"md_kio36vmscfv8bg","title":"books","type":3,"is_default":1,"show_system_fields":null,"lock_type":"collaborative","uuid":null,"password":null,"show":1,"order":1,"created_at":"2022-10-23 02:02:31","updated_at":"2022-10-23 02:02:31","meta":null,"view":{"fk_view_id":"vw_3hj5efjadyoii9","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","uuid":null,"created_at":"2022-10-23 02:02:31","updated_at":"2022-10-23 02:02:31","meta":null},"disabled":{"owner":false,"creator":false,"viewer":false,"editor":false,"commenter":false,"guest":false}}],"columnsById":{"cl_ut2cr09yr276q7":{"id":"cl_ut2cr09yr276q7","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","fk_model_id":"md_kio36vmscfv8bg","title":"Id","column_name":"id","uidt":"ID","dt":"int","np":"11","ns":"0","clen":null,"cop":"1","pk":1,"pv":null,"rqd":1,"un":1,"ct":"int(11) unsigned","ai":1,"unique":0,"cdf":null,"cc":"","csn":null,"dtx":"specificType","dtxp":"11","dtxs":"0","au":0,"validate":null,"virtual":null,"deleted":null,"system":0,"order":1,"created_at":"2022-10-23 02:02:32","updated_at":"2022-10-23 02:02:32","meta":null},"cl_e12g7intvvneyr":{"id":"cl_e12g7intvvneyr","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","fk_model_id":"md_kio36vmscfv8bg","title":"Title","column_name":"title","uidt":"SingleLineText","dt":"varchar","np":null,"ns":null,"clen":"45","cop":"2","pk":0,"pv":1,"rqd":0,"un":0,"ct":"varchar(45)","ai":0,"unique":0,"cdf":null,"cc":"","csn":"utf8mb4","dtx":"specificType","dtxp":"45","dtxs":null,"au":0,"validate":null,"virtual":null,"deleted":null,"system":0,"order":2,"created_at":"2022-10-23 02:02:32","updated_at":"2022-10-23 02:02:32","meta":null},"cl_rx0f4hzvib1pj0":{"id":"cl_rx0f4hzvib1pj0","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","fk_model_id":"md_kio36vmscfv8bg","title":"CreatedAt","column_name":"created_at","uidt":"DateTime","dt":"timestamp","np":null,"ns":null,"clen":null,"cop":"3","pk":0,"pv":null,"rqd":0,"un":0,"ct":"timestamp","ai":0,"unique":0,"cdf":"CURRENT_TIMESTAMP","cc":"","csn":null,"dtx":"specificType","dtxp":"0","dtxs":null,"au":0,"validate":null,"virtual":null,"deleted":null,"system":0,"order":3,"created_at":"2022-10-23 02:02:32","updated_at":"2022-10-23 02:02:32","meta":null},"cl_9pocg34ee0r9rh":{"id":"cl_9pocg34ee0r9rh","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","fk_model_id":"md_kio36vmscfv8bg","title":"UpdatedAt","column_name":"updated_at","uidt":"DateTime","dt":"timestamp","np":null,"ns":null,"clen":null,"cop":"4","pk":0,"pv":null,"rqd":0,"un":0,"ct":"timestamp","ai":0,"unique":0,"cdf":"CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP","cc":"","csn":null,"dtx":"specificType","dtxp":"0","dtxs":null,"au":0,"validate":null,"virtual":null,"deleted":null,"system":0,"order":4,"created_at":"2022-10-23 02:02:33","updated_at":"2022-10-23 02:02:33","meta":null}}}
  }))
  .get('/v1/db/meta/tables/md_kio36vmscfv8bg/views', defineEventHandler(() => {
    return {"list":[{"ptn":"nc_7qi7__books","_ptn":"books","ptype":"table","tn":"books","_tn":"books","id":"vw_3hj5efjadyoii9","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","fk_model_id":"md_kio36vmscfv8bg","title":"books","type":3,"is_default":1,"show_system_fields":null,"lock_type":"collaborative","uuid":null,"password":null,"show":1,"order":1,"created_at":"2022-10-23 02:02:31","updated_at":"2022-10-23 02:02:31","meta":null,"view":{"fk_view_id":"vw_3hj5efjadyoii9","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","uuid":null,"created_at":"2022-10-23 02:02:31","updated_at":"2022-10-23 02:02:31","meta":null},"disabled":{"owner":false,"creator":false,"viewer":false,"editor":false,"commenter":false,"guest":false}}]}
  }))
  .get('/v1/db/data/noco/p_mkiimun6xbpxb0/md_kio36vmscfv8bg/views/vw_3hj5efjadyoii9', defineEventHandler(() => {
    return {"list":[],"pageInfo":{"totalRows":0,"page":1,"pageSize":25,"isFirstPage":true,"isLastPage":true}}
  }))
  .get('/v1/db/meta/grids/vw_3hj5efjadyoii9/grid-columns', defineEventHandler(() => {
    return [{"id":"nc_mnjfbc9wkkbm4u","fk_view_id":"vw_3hj5efjadyoii9","fk_column_id":"cl_ut2cr09yr276q7","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","uuid":null,"label":null,"help":null,"width":"200px","show":1,"order":1,"created_at":"2022-10-23 02:02:32","updated_at":"2022-10-23 02:02:32"},{"id":"nc_qg7q60xxznmp9c","fk_view_id":"vw_3hj5efjadyoii9","fk_column_id":"cl_e12g7intvvneyr","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","uuid":null,"label":null,"help":null,"width":"200px","show":1,"order":2,"created_at":"2022-10-23 02:02:32","updated_at":"2022-10-23 02:02:32"},{"id":"nc_9qeogk8i56u2fc","fk_view_id":"vw_3hj5efjadyoii9","fk_column_id":"cl_rx0f4hzvib1pj0","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","uuid":null,"label":null,"help":null,"width":"200px","show":1,"order":3,"created_at":"2022-10-23 02:02:32","updated_at":"2022-10-23 02:02:32"},{"id":"nc_960t5hlao4evi8","fk_view_id":"vw_3hj5efjadyoii9","fk_column_id":"cl_9pocg34ee0r9rh","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","uuid":null,"label":null,"help":null,"width":"200px","show":1,"order":4,"created_at":"2022-10-23 02:02:33","updated_at":"2022-10-23 02:02:33"}]
  }))
  .get('/v1/db/meta/views/vw_3hj5efjadyoii9/filters', defineEventHandler(() => {
    return []
  }))
  .get('/v1/db/meta/views/vw_3hj5efjadyoii9/sorts', defineEventHandler(() => {
    return {"sorts":{"list":[]}}
  }))
  .get('/v1/db/meta/views/vw_3hj5efjadyoii9/columns', defineEventHandler(() => {
    return [{"id":"nc_mnjfbc9wkkbm4u","fk_view_id":"vw_3hj5efjadyoii9","fk_column_id":"cl_ut2cr09yr276q7","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","uuid":null,"label":null,"help":null,"width":"200px","show":1,"order":1,"created_at":"2022-10-23 02:02:32","updated_at":"2022-10-23 02:02:32"},{"id":"nc_qg7q60xxznmp9c","fk_view_id":"vw_3hj5efjadyoii9","fk_column_id":"cl_e12g7intvvneyr","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","uuid":null,"label":null,"help":null,"width":"200px","show":1,"order":2,"created_at":"2022-10-23 02:02:32","updated_at":"2022-10-23 02:02:32"},{"id":"nc_9qeogk8i56u2fc","fk_view_id":"vw_3hj5efjadyoii9","fk_column_id":"cl_rx0f4hzvib1pj0","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","uuid":null,"label":null,"help":null,"width":"200px","show":1,"order":3,"created_at":"2022-10-23 02:02:32","updated_at":"2022-10-23 02:02:32"},{"id":"nc_960t5hlao4evi8","fk_view_id":"vw_3hj5efjadyoii9","fk_column_id":"cl_9pocg34ee0r9rh","base_id":"ds_8e44rwkxvzemt1","project_id":"p_mkiimun6xbpxb0","uuid":null,"label":null,"help":null,"width":"200px","show":1,"order":4,"created_at":"2022-10-23 02:02:33","updated_at":"2022-10-23 02:02:33"}]
  }))

  // @todo, add new table and add new row.

export default useBase('/api', router.handler);
