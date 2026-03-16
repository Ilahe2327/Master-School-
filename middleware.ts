// middleware.ts (root-da, app/ yanında)
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['az', 'en', 'ru'],
  defaultLocale: 'az',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};