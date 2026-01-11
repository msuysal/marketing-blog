import { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://marketing-blog-teal.vercel.app'

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/articles`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/deconstructions`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
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
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
    ]

    // Article pages
    const articlePages = posts
        .filter(post => !post.tags.includes('Deconstruction'))
        .map(post => ({
            url: `${baseUrl}/article/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))

    // Deconstruction pages
    const deconstructionPages = posts
        .filter(post => post.tags.includes('Deconstruction'))
        .map(post => ({
            url: `${baseUrl}/deconstruction/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))

    return [...staticPages, ...articlePages, ...deconstructionPages]
}
