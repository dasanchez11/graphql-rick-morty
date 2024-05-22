import { NextFunction, Response, Request } from "express";
import moment from "moment";
import responseSize from "express-response-size";

export const RequestLogMiddleware = (request: Request, response: Response) => {
  const isIntrospectionQuery =
    request.body["operationName"] === "IntrospectionQuery";
  if (isIntrospectionQuery) {
    return;
  }

  const originalResponse = response.send;

  response.send = (...args: any[]): any => {
    const requestTime = moment().format("DD/MMM/YYYY HH:mm:ss");
    const device = request.useragent!.platform;
    const os = request.useragent!.os;

    console.log(
      "\x1b[36m",
      `[${requestTime}] ${request.method}  ${
        response.statusCode
      } ${device} ${os} ${JSON.stringify(request.body)}`,
      "\x1b[0m"
    );

    originalResponse.apply(response, args);
  };
};
