import { DefaultSeoProps } from 'next-seo'

const SEO: DefaultSeoProps = {
  title: 'siam.dev',
  description: 'The portfolio website of Kawsar Siam, a software developer.',
  openGraph: {
    url: 'https://www.aycan.dev',
    title: 'siam.dev',
    description: 'The portfolio website of kawsar Siam, a software developer.',
    type: 'website',
    locale: 'en_IE',
    images: [
      {
        url: 'https://user-images.githubusercontent.com/74212439/199986276-7c72cb14-1e54-4dc0-a355-a1f6ad7b9d18.png',
        width: 800,
        height: 600,
        alt: 'siam.dev thumbnail image',
        type: 'image/png',
      },
    ],
    siteName: 'siam.dev',
  },
  twitter: {
    handle: '@bleedeleventh',
    site: '@bleedeleventh',
    cardType: 'summary_large_image',
  },
}

export default SEO
