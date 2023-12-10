module.exports = {
  reactStrictMode: true,
  transpilePackages: ["gsap"],
  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'all',
          },
        ],
        source: '/:path*',
      });
    }
    return headers;
  }
}