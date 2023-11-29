// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const coffees = defineCollection({
    type: "content",
    schema: z.object({
        origin: z.string(),
        title: z.string(),
        price: z.number(),
        image_src: z.string(),
        image_alt: z.string(),
    })
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    coffees,
};