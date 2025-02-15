// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro'

export default defineConfig({
    redirects: {
        '/': '/en',
    },
    output: "static",
    base: "/cvpages/",
    site: "https://schify.github.io/",
    integrations: [
        UnoCSS({
            injectReset: true
        }),
    ],
});
