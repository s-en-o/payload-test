import type { Block } from 'payload/types';

const BlockHeader: Block = {
    slug: 'blockHeader', // required
    imageURL: 'https://picsum.photos/id/237/200/300',
    imageAltText: 'A nice thumbnail image to show what this block looks like',
    fields: [
        // required
        {
            name: 'header',
            type: 'text',
        },
        {
            name: 'subheader',
            type: 'text',
        },
    ],
};

export default BlockHeader;
