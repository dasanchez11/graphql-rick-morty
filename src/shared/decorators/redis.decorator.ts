import redisClient from "../../database/redis-connection";

export const RedisCache =
  (cacheExpiration: number = 60) =>
  (target: any, propertyKey: string, descriptor: PropertyDescriptor): void => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const cacheKey = `${propertyKey}:${JSON.stringify(args)}`;
      const cachedValue = await redisClient.get(cacheKey);

      if (cachedValue) {
        return JSON.parse(cachedValue);
      }

      const result = await originalMethod.apply(this, args);
      await redisClient.set(
        cacheKey,
        JSON.stringify(result),
        "EX",
        cacheExpiration
      );

      return result;
    };
  };
