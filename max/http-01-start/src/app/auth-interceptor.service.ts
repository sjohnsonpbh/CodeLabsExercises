import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";

// remember me - Interceptors - adds a header to every request leaving app
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      headers: req.headers.append("Auth", "xyz"),
    });
    return next.handle(modifiedRequest);
  }
}
