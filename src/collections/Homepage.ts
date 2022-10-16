import { GlobalConfig } from 'payload/types';

const Homepage: GlobalConfig = {
    slug: 'homepageContent',
    admin: {
        description: 'Homepage content',
        group: 'Homepage',
    },
    fields: [
        {
            name: 'Header',
            type: 'richText',
        },
        {
            name: 'Intro',
            type: 'richText',
        },
    ],
};

export default Homepage;
