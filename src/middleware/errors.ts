import { Request as Req, Response as Res, NextFunction as Next } from "express";
// import http errors creator function
import createHttpError from "http-errors";
// if any not found services or unknown service names
export const catchNotFound = (req: Req, res: Res, next: Next) => {
  // fallback to error handler
  next(createHttpError(404, `Service ${req.path} Not Found!`));
};
// any error will fallback into the error handler
export const errorHandler = (err: any, req: Req, res: Res, next: any) => {
  // if error is a not found err
  if (err.status === 404) {
    // extract status from error
    const { status, ...rest } = err;
    // response with the not found message
    return res.status(status).json({ message: rest.message });
  }
  // else extract errors and status from error
  const { status, ...errors } = err;
  // response with error received
  res.status(status || 500).json(errors);
};
