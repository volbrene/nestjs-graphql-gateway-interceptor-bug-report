import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  BadRequestException
} from "@nestjs/common";
import { Observable } from "rxjs";
import { GqlExecutionContext } from "@nestjs/graphql";

@Injectable()
export class LocaleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = GqlExecutionContext.create(context);
    const { req, locale } = ctx.getContext();

    if (!locale && req.body.operationName !== "IntrospectionQuery") {
      throw new BadRequestException(
        "invalid locale or x-locale not exist in header"
      );
    }

    return next.handle();
  }
}
