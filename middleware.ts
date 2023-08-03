import { Request, Response, NextFunction } from "express";
import redisHandler from "./redis_handler";


async function checkCachedRouteData(req: Request, res: Response, next: NextFunction) {
    
  const cachedData = await redisHandler.get(`${req.protocol}://${req.get('host')}${req.originalUrl}`);

  if(!cachedData || cachedData === null || cachedData === undefined) {
    return next();
  } else {
    try {
      const parsedCachedData = JSON.parse(cachedData);
      return res.status(200).json({ message: `Data fetched successfully`, error: null, data: parsedCachedData});
    } catch(e) {
      return next();
    }
  }
}

export default checkCachedRouteData;