import notifier from 'node-notifier';

class ApiError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  const { message } = err;
  const statusCode = err.statusCode ? err.statusCode : 500;

  notifier.notify({
    code: statusCode,
    message: message
  });

  console.log(err);
  res.status(statusCode).json({
    statusCode,
    message
  });
};

export { ApiError, handleError };
