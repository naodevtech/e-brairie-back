import notifier from 'node-notifier';

function errorNotification(response, code, message) {
  notifier.notify({
    code: code,
    message: message
  });
  return response.status(code).json({
    code,
    message
  });
}

module.exports = errorNotification;
