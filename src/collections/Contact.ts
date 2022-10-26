import { GlobalConfig } from 'payload/types';

const Contact: GlobalConfig = {
    slug: 'contact',
    fields: [
        {
            label: 'Links',
            type: 'collapsible',
            admin: {
                initCollapsed: true,
            },
            fields: [
                {
                    name: 'email',
                    type: 'text',
                },
                {
                    name: 'github',
                    type: 'text',
                },
            ],
        },
        {
            name: 'body',
            type: 'group',
            fields: [
                {
                    name: 'heading',
                    type: 'text',
                },
                {
                    name: 'description',
                    type: 'textarea',
                },
            ],
        },
    ],
};

export default Contact;
