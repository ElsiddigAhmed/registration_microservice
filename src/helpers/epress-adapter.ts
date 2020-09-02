/**
 * a brief description about express adapter:
 * express adapter is the function that allows
 * controller and express built-in objects to
 * deal with each others
 */

import { Request as Req, Response as Res, NextFunction as Next } from "express";

// the adapter is actually a currier function
export const Adapter = (controller: any) => {
  // handle objects from express
  return async (req: Req & { data: object }, res: Res, next: Next) => {
    try {
      // execute controller and store result
      const result = await controller({
        ...req.data,
      });
      // grab status if exist and the data
      const { status, ...data } = result;
      // if everything is good then response with the data from controller result
      res.status(status || 200).json(data);
      // catch errors
    } catch (err) {
      // if any errors then run error handler with the given status
      next({ status: err.status, message: res.locals.t(err.message) });
    }
  };
};
