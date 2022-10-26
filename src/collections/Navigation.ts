import { CollectionConfig } from 'payload/types';

const Nav: CollectionConfig = {
    slug: 'navigation',
    fields: [
        {
            name: 'copy',
            type: 'text',
        },
        {
            name: 'URL',
            type: 'text',
        },
    ],
};

export default Nav;
