import { NextFunction, Request, Response } from 'express';

import log from '../logger';

const validatePagination = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!(req.query.pageSize as string) || !(req.query.pageNumber as string)) {
      throw new Error('pageNumber and pageSize query parameters are needed.');
    }

    return next();
  } catch (e) {
    log.error(e);
    // @ts-ignore
    return res.status(400).send(e.message);
  }
};

export default validatePagination;
