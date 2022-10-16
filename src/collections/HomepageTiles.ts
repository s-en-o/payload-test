import { CollectionConfig } from 'payload/types';

const HomepageTiles: CollectionConfig = {
    slug: 'homepageTiles',
    admin: {
        useAsTitle: 'title',
        group: 'Homepage',
    },
    versions: {
        drafts: true,
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            label: 'Featured image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'firstParagraph',
            label: 'First paragraph',
            type: 'text',
            required: true,
        },
        {
            name: 'position',
            label: 'Type',
            type: 'select',
            options: ['Right', 'Left'],
        },
    ],
};

export default HomepageTiles;
