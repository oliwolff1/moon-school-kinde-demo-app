const nextConfig = {
  env: {
    KINDE_SITE_URL:
      process.env.KINDE_SITE_URL ?? 'https://moon-school-kinde-demo-app.vercel.app',
    KINDE_POST_LOGOUT_REDIRECT_URL:
      process.env.KINDE_POST_LOGOUT_REDIRECT_URL ??
      'https://moon-school-kinde-demo-app.vercel.app',
    KINDE_POST_LOGIN_REDIRECT_URL:
      process.env.KINDE_POST_LOGIN_REDIRECT_URL ??
      'https://moon-school-kinde-demo-app.vercel.app/dashboard',
  },
};

export default nextConfig;
