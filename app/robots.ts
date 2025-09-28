import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://your-domain.com' // Replace with your actual domain
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/_next/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}