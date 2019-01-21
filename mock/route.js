function getFakeRoutes(req, res) {
  const json = { code: 200, success: true, msg: '操作成功' };
  json.data = {
    '/form/advanced-form': { authority: ['admin', 'user'] },
  };
  return res.json(json);
}

export default {
  '/api/auth_routes': getFakeRoutes(),
};
