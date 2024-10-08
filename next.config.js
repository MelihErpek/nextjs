const nextConfig = {
  output: 'export',
  env: {
    NEXT_PUBLIC_HEYGEN_API_KEY: process.env.NEXT_PUBLIC_HEYGEN_API_KEY, // Ortam değişkeni burada ekleniyor
    // Diğer ortam değişkenlerini de buraya ekleyin
  },
};

module.exports = nextConfig;
