import { GlobalConfig } from 'payload/types';
import BlockHeader from './BlockHeader';
import BlockExpertise from './BlockExpertise';

const About: GlobalConfig = {
    slug: 'about',
    fields: [
        {
            name: 'header', // required
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
            type: 'row', // required
            fields: [
                // required
                {
                    name: 'CV',
                    type: 'upload',
                    relationTo: 'media',
                    admin: {
                        width: '50%',
                    },
                },

                {
                    name: 'expertise',
                    type: 'textarea',
                    admin: {
                        width: '50%',
                    },
                },
            ],
        },

        {
            name: 'experience', // required
            type: 'array', // required
            minRows: 1,
            maxRows: 20,
            labels: {
                singular: 'Experience',
                plural: 'Experiences',
            },
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
                    admin: {
                        date: {
                            pickerAppearance: 'monthOnly',
                        },
                    },
                },
                {
                    name: 'end',
                    type: 'date',
                    admin: {
                        date: {
                            pickerAppearance: 'monthOnly',
                        },
                    },
                },
                {
                    name: 'description',
                    type: 'richText',
                },
            ],
        },
        {
            name: 'education', // required
            type: 'array', // required
            minRows: 1,
            maxRows: 20,
            labels: {
                singular: 'Education',
                plural: 'Educations',
            },
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
                    admin: {
                        date: {
                            pickerAppearance: 'monthOnly',
                        },
                    },
                },
                {
                    name: 'end',
                    type: 'date',
                    admin: {
                        date: {
                            pickerAppearance: 'monthOnly',
                        },
                    },
                },
                {
                    name: 'description',
                    type: 'richText',
                },
            ],
        },
    ],
};

export default About;
