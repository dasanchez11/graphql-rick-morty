import "reflect-metadata";
import Redis from "ioredis";
require("dotenv").config();

const redisClient = new Redis({
  host: "localhost",
  password: process.env.REDIS_PASSWORD,
  port: 6379,
});

export default redisClient;
