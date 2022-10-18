import { GlobalConfig } from 'payload/types';

const Homepage: GlobalConfig = {
    slug: 'homepage',
    fields: [
        {
            name: 'header',
            type: 'richText',
        },
        {
            name: 'subheader',
            type: 'text',
        },
    ],
};

export default Homepage;
