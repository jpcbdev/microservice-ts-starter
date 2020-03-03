import { RateLimiterRedis } from 'rate-limiter-flexible';
import Redis from 'ioredis';
import { Request, Response, NextFunction } from 'express';
import { logger } from '.';

const redisClient = new Redis({ enableOfflineQueue: false });
const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  points: 20,
  duration: 1
});

export = (req: Request, res: Response, next: NextFunction) => {
  limiter
    .consume(req.connection.remoteAddress)
    .then(() => {
      next();
    })
    .catch((error) => {
      logger.error(error)
      res.status(429).send({ message: 'Intentelo de nuevo en unos segundos', error: true });
    });
};
