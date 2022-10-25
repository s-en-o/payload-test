import { GlobalConfig } from 'payload/types';
import BlockHeader from './BlockHeader';

const About: GlobalConfig = {
    slug: 'about',
    fields: [
        {
            name: 'layout', // required
            type: 'blocks', // required
            minRows: 1,
            maxRows: 20,
            blocks: [
                // required
                BlockHeader,
            ],
        },
        {
            name: 'content',
            type: 'richText',
        },
        {
            name: 'CV',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'expertise',
            type: 'textarea',
        },
    ],
};

export default About;
