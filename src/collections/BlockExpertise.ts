import type { Block } from 'payload/types';

const BlockExpertise: Block = {
    slug: 'blockExpertise', // required
    fields: [
        // required
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'role',
            type: 'text',
            required: true,
        },
        {
            name: 'start',
            type: 'date',
        },
        {
            name: 'end',
            type: 'date',
        },
        {
            name: 'description',
            type: 'richText',
        },
    ],
};

export default BlockExpertise;
