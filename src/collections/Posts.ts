import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
    },
    versions: {
        drafts: true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'body',
            type: 'richText',
            required: true,
        },
    ],
};

export default Posts;
