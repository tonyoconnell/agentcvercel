import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C0Fo96bX.mjs';
import { manifest } from './manifest_CtQynfgE.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/api/chat/openai-gpt4.astro.mjs');
const _page1 = () => import('./pages/chat.astro.mjs');
const _page2 = () => import('./pages/chatbubble.astro.mjs');
const _page3 = () => import('./pages/mit-license.astro.mjs');
const _page4 = () => import('./pages/readme.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const _page6 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/api/chat/openai-gpt4.ts", _page0],
    ["src/pages/chat.astro", _page1],
    ["src/pages/chatbubble.astro", _page2],
    ["src/pages/mit-license.md", _page3],
    ["src/pages/readme.astro", _page4],
    ["src/pages/index.astro", _page5],
    ["node_modules/.pnpm/astro@5.0.0-beta.8_@types+node@22.9.0_jiti@1.21.6_rollup@4.27.2_typescript@5.6.3_yaml@2.6.0/node_modules/astro/dist/assets/endpoint/generic.js", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "79ba3cf1-b614-4e64-a820-538d8b6fa864",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
