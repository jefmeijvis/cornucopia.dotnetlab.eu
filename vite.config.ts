import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import VitePluginRestart from 'vite-plugin-restart';
import { viteStaticCopy } from 'vite-plugin-static-copy'

let vitePluginRestartOptions = {restart: ['./data/**']}

let viteStaticCopyTargets = [{src: './data/*',dest: '/data'}]
let viteStaticCopyOptions = { targets: viteStaticCopyTargets}

export default defineConfig({
	plugins: [
		sveltekit(),
		VitePluginRestart(vitePluginRestartOptions),
		viteStaticCopy(viteStaticCopyOptions)
	],
});
