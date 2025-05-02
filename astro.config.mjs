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
						{ label: 'Elastic Search', slug: 'plugins/elasticsearch' },
						{ label: 'Custom Plugin', slug: 'plugins/custom-plugin' },
					],
				},
				{
					label: 'Providers',
					items: [
						{ label: 'Overview', slug: 'providers/overview' },
						{ label: 'Web Service', slug: 'providers/webservice' },
						{ label: 'Prometheus', slug: 'providers/prometheus' },
					],
				},
				{
					label: 'Pusher',
					items: [
						{ label: 'Overview', slug: 'pusher/overview' },
						{ label: 'Elastic Search', slug: 'pusher/elasticsearch' },
						{ label: 'AMQP Messaging', slug: 'pusher/messaging' },
					],
				},
				{
					label: 'Storage',
					items: [
						{ label: 'Overview', slug: 'storage/overview' },
						{ label: 'MongoDB', slug: 'storage/mongodb' },
					],
				},
				{
					label: 'HealthCheck as a Config (HCaaC)',
					items: [
						{ label: 'Overview', slug: 'hcaac/overview' },
						{ label: 'YML', slug: 'hcaac/yml' },
					],
				},
				{
					label: 'Examples',
					items: [
						{ label: 'Overview', slug: 'examples/overview' },
						{ label: 'Multiple Services Basic', slug: 'examples/multiple-services-basic' },
					],
				},
			],
		}),
	],
});
