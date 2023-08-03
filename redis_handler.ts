import * as Redis from 'ioredis';

export type RedisClient = Redis.Redis;

const redisHandler: Redis.Redis = new Redis.Redis({
    host: 'localhost',
    port: 6379
});

redisHandler.on('error', err => {
    console.error(`Redis Error: ${err}`);
})

export default redisHandler;
