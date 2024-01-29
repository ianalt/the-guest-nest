import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const httpMethod = req.method;
    const path = req.url;
    const message =
      typeof exception.getResponse() !== 'string'
        ? exception.getResponse().toString()
        : exception.getResponse();

    const exceptionThrown = {
      status,
      message,
      timestamp: new Date().toISOString(),
      path,
      method: httpMethod,
    };

    console.error('[EXCEPTION THROWN]');

    console.error(exceptionThrown);

    res.status(status).json(exceptionThrown);
  }
}
