import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Posts from './collections/Posts';
import Homepage from './collections/Homepage';
import Media from './collections/Media';
import About from './collections/About';
import Contact from './collections/Contact';
import Navigation from './collections/Navigation';

export default buildConfig({
    // By default, Payload will boot up normally
    // and you will be provided with a base `User` collection.
    // But, here is where you define how you'd like Payload to work!
    serverURL: 'http://localhost:3000',
    admin: {
        user: Users.slug,
    },
    collections: [
        Users,
        Posts,
        Media,
        Navigation,

        // Add Collections here
        // Examples,
    ],
    // globals are a single-instance collection, often used for navigation or site settings that live in one place
    globals: [Homepage, About, Contact],

    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
        maxComplexity: 3,
    },
    telemetry: false,
    /**
     * https://payloadcms.com/docs/production/preventing-abuse
     */
    rateLimit: {
        window: 60000,
        max: 3,
    },
});
