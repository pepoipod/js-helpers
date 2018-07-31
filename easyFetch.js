/**
 * リクエストでエラーが発生した際、thenにそのまま値を流すのではなく、Errorをthrowさせるようにするhelper.
 * @param res
 * @returns {*}
 */
const handleErrors = (res) => {
  const json = res.status === 204 ? res.text() : res.json();

  if (!res.ok) {
    return json.then((err) => {
      throw Error(JSON.stringify(err));
    });
  }

  return json;
};

/**
 * エラーをthenではなくerrとして扱うための、fetchのラッパー関数.
 * @param req
 * @returns {Promise<Response>}
 */
const easyFetch = (req) => {
  let reqUrl = req.url;

  const custom = req.custom || {};
  const reqObj = {
    ...custom,
    method: req.type,
  };

  reqObj.headers = reqObj.headers || {};

  // GETパラメーターが存在した場合.
  if (req.type === 'GET' && req.data) {
    reqUrl += '/?';

    // GETパラメータをURLに追加.
    Object.keys(req.data).forEach((key) => {
      reqUrl += `${key}=${req.data[key]}&`;
    });

    // 末尾の&を削除.
    if (reqUrl.substr(-1, 1) === '&') {
      reqUrl = reqUrl.slice(0, -1);
    }
  }

  if (req.type === 'POST' || req.type === 'PATCH' || req.type === 'PUT') {
    reqObj.headers.Accept = 'application/json';
    reqObj.headers['Content-Type'] = 'application/json';
    reqObj.body = JSON.stringify(req.data);
  }

  return fetch(reqUrl, reqObj)
    .then(handleErrors)
    .then(payload => ({ payload }))
    .catch(err => ({ err }));
};

export default easyFetch;
