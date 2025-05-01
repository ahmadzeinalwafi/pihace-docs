// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'pihace',
			logo: {
				src: '/public/favicon.svg',
				alt: 'pihace logo',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ahmadzeinalwafi/pihace' },
				{ icon: 'seti:python', label: 'PyPi', href: 'https://pypi.org/project/pihace/' }
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Overview', slug: 'getting-started/overview' },
						{ label: 'Instalation', slug: 'getting-started/instalation' },
						{ label: 'Core Concepts', slug: 'getting-started/core-concepts' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'Plugins',
					items: [
						{ label: 'Overview', slug: 'plugins/overview' },
						{ label: 'MySQL', slug: 'plugins/mysql' },
						{ label: 'MongoDB', slug: 'plugins/mongodb' },
						{ label: 'InfluxDB', slug: 'plugins/influxdb' },
						{ label: 'Custom Plugin', slug: 'plugins/custom-plugin' },
					],
				},
				{
					label: 'Providers',
					items: [
						{ label: 'Overview', slug: 'providers/overview' },
						{ label: 'Web Service', slug: 'providers/webservice' },
					],
				},
				{
					label: 'Examples',
					items: [
						{ label: 'Multiple Services Basic', slug: 'examples/multiple-services-basic' },
					],
				},
			],
		}),
	],
});
