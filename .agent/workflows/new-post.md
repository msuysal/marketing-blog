---
description: Add a new blog post or deconstruction
---

1. Open `src/lib/posts.ts`.
2. Find the `posts` array.
3. Add a new object following the `Post` interface:
   ```typescript
   {
     slug: "your-post-slug",
     title: "Your Post Title",
     excerpt: "A brief summary for the preview.",
     date: "Jan 11, 2026",
     tags: ["Tag 1", "Tag 2"],
     content: `
       <p>Your HTML content here.</p>
     `,
     // Optional for deconstructions
     industry: "Retail" 
   }
   ```
4. Verify the new post appears on the homepage and Knowledge Base.
5. Check if the AI Audio Edition is working for the new post.
