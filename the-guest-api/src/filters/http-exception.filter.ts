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

    const exceptionThrown = {
      status,
      timestamp: new Date().toISOString(),
      path: req.url,
      method: req.method,
    };

    console.error('[EXCEPTION THROWN]');

    console.error(exceptionThrown);

    res.status(status).json(exceptionThrown);
  }
}
