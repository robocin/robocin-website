import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: 'c24ncoul',
    dataset: 'production',
    title: 'RobôCIn', 
    apiVersion: '2023-08-01',
    basePath: '/studio',
    plugins: [deskTool()],
})

export default config;