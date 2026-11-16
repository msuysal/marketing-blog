import { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://olguuysal.com';

    const articleEntries = posts
        .filter(post => !post.tags.includes('Deconstruction'))
        .map((post) => ({
            url: `${baseUrl}/article/${post.slug}`,
            lastModified: new Date(`${post.date} UTC`),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }));

    const deconstructionEntries = posts
        .filter(post => post.tags.includes('Deconstruction'))
        .map((post) => ({
            url: `${baseUrl}/deconstruction/${post.slug}`,
            lastModified: new Date(`${post.date} UTC`),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/articles`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/deconstructions`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/the-perspective`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        },
        ...articleEntries,
        ...deconstructionEntries,
    ];
}
