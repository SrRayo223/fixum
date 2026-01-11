import {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            }
        ],
        sitemap: 'https://fixum.vercel.app/sitemap.xml',
    }
}