import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: "@import './static/style/style.scss';"
		}
	}),

	kit: {
		adapter: vercel(),
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			resolve: {
				alias: {
					$data: path.resolve('./src/data'),
					$assets: path.resolve('./src/assets'),
					$lib: path.resolve('./src/lib'),
					$routes: path.resolve('./src/routes')
				}
			}
		}
	},

	onwarn: (warning, handler) => {
		const { code, frame } = warning;
		if (code === 'css-unused-selector') return;

		handler(warning);
	}
};

export default config;
