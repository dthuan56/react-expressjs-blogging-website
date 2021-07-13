export const asyncHandler = fn => (req, res, next) => {
  return Promise
      .resolve(fn(req, res, next))
      .catch(next);
};

export const errorHandler = (error, req, res, next) => {
  const status = error.status || 500;
  res.status(status);
  res.json({ message: error.message });
  console.log(error);
};