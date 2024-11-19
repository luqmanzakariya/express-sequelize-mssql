const responseSuccess = (res, obj) => {
  res
    .status(200)
    .send({
      statusCode: obj.status,
      message: obj.message,
      data: obj.data || {}
    });
};

const responseError = (res, obj) => {
  res
    .status(obj.status || 501)
    .send({
      statusCode: obj.status,
      message: obj.message
    });
};

module.exports = { responseSuccess, responseError}