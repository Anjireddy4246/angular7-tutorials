import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './noops.interceptor';
import { AuthInterceptor } from './auth.interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]