import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: vercel(),
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
        vite:{
            resolve: {
                alias: {
                    $assets: path.resolve('./src/assets'),
                    $lib: path.resolve('./src/lib'),
                    $routes: path.resolve('./src/routes'),
                }
            }
        },
	}
};

export default config;
