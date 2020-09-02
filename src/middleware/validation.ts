import { Request, Response, NextFunction } from "express";
export const ValidationMiddleware = (schema: Function) => {
  return async (
    req: Request & { data: object },
    res: Response,
    next: NextFunction
  ) => {
    delete req.query.lng;
    const { value, error } = await schema({
      ...req.body,
      ...req.params,
      ...req.query,
    });
    // if there is no validation error do the next steps:
    // 1- append trusted values in the request
    req.data = value;
    // 2- run the next middleware without errors
    if (!error) return next();
    // if there is a validation error then fall to the error handler middleware
    // create error object
    const errorObject: any = {};
    // loop through error and grab the key and message
    error.details.forEach((err: any) => {
      // mapping though details and append errors to the to error object
      errorObject[err.context.key] = res.locals.t(err.message);
    });
    // run the next error handler
    next({ status: 400, ...errorObject });
  };
};
