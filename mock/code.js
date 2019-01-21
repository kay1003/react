import { delay } from 'roadhog-api-doc';

function getFakeList(req, res) {
  const json = { code: 200, success: true, msg: '操作成功' };
  const list = [];
  list.push({
    id: '1',
    codeName: '通知公告',
    tableName: 'blade_notice',
    pkName: 'id',
    modelName: 'Notice',
    packageName: 'org.springblade.desk',
  });
  json.data = {
    total: 10,
    size: 10,
    current: 1,
    searchCount: true,
    pages: 1,
    records: list,
  };
  return res.json(json);
}

function getFakeDetail(req, res) {
  const json = { code: 200, success: true, msg: '操作成功' };
  const detail = {
    id: '1',
    codeName: '通知公告',
    tableName: 'blade_notice',
    pkName: 'id',
    modelName: 'Notice',
    packageName: 'org.springblade.desk',
    apiPath: 'D:\\Workspaces\\java\\SpringBlade\\blade-service\\blade-desk',
    webPath: 'D:\\Workspaces\\web\\Sword',
  };
  json.data = detail;
  return res.json(json);
}

function fakeSuccess(req, res) {
  const json = { code: 200, success: true, msg: '操作成功' };
  return res.json(json);
}

const proxy = {
  'GET /api/blade-system/code/list': getFakeList,
  'GET /api/blade-system/code/detail': getFakeDetail,
  'POST /api/blade-system/code/submit': fakeSuccess,
  'POST /api/blade-system/code/remove': fakeSuccess,
  'POST /api/blade-system/code/gen-code': fakeSuccess,
};
export default delay(proxy, 500);
