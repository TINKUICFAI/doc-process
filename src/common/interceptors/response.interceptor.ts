/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, catchError, map, throwError } from 'rxjs';

interface StandardResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<StandardResponse> {
    return next.handle().pipe(
      map((data: any): StandardResponse => {
        const responseData: unknown =
          typeof data === 'object' && data !== null && 'code' in data && 'message' in data
            ? (data as StandardResponse)
            : {
                code: 1,
                message: 'Success',
                data,
              };

        return responseData as StandardResponse;
      }),
      catchError((err: unknown) => throwError(() => err)),
    );
  }
}
