import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_LpxzUbY8.mjs';
import { e as decodeKey } from './chunks/astro/server_B_KtmydP.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/toc/Server/ONE/local/one/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/chat/openai-gpt4","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/chat\\/openai-gpt4\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"chat","dynamic":false,"spread":false}],[{"content":"openai-gpt4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/chat/openai-gpt4.ts","pathname":"/api/chat/openai-gpt4","prerender":false,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.DB9cTGZC.css"},{"type":"external","src":"/_astro/mit-license.aLNeWzrP.css"}],"routeData":{"route":"/chat","isIndex":false,"type":"page","pattern":"^\\/chat\\/?$","segments":[[{"content":"chat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chat.astro","pathname":"/chat","prerender":false,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.DB9cTGZC.css"},{"type":"external","src":"/_astro/mit-license.aLNeWzrP.css"}],"routeData":{"route":"/chatbubble","isIndex":false,"type":"page","pattern":"^\\/chatbubble\\/?$","segments":[[{"content":"chatbubble","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chatbubble.astro","pathname":"/chatbubble","prerender":false,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.DB9cTGZC.css"},{"type":"external","src":"/_astro/mit-license.aLNeWzrP.css"}],"routeData":{"route":"/mit-license","isIndex":false,"type":"page","pattern":"^\\/mit-license\\/?$","segments":[[{"content":"mit-license","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mit-license.md","pathname":"/mit-license","prerender":false,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.DB9cTGZC.css"},{"type":"external","src":"/_astro/mit-license.aLNeWzrP.css"}],"routeData":{"route":"/readme","isIndex":false,"type":"page","pattern":"^\\/readme\\/?$","segments":[[{"content":"readme","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/readme.astro","pathname":"/readme","prerender":false,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.DB9cTGZC.css"},{"type":"external","src":"/_astro/mit-license.aLNeWzrP.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.0.0-beta.8_@types+node@22.9.0_jiti@1.21.6_rollup@4.27.2_typescript@5.6.3_yaml@2.6.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/toc/Server/ONE/local/one/src/pages/mit-license.md",{"propagation":"none","containsHead":true}],["/Users/toc/Server/ONE/local/one/src/pages/chat.astro",{"propagation":"none","containsHead":true}],["/Users/toc/Server/ONE/local/one/src/pages/chatbubble.astro",{"propagation":"none","containsHead":true}],["/Users/toc/Server/ONE/local/one/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/toc/Server/ONE/local/one/src/pages/readme.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/chat/openai-gpt4@_@ts":"pages/api/chat/openai-gpt4.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/chat@_@astro":"pages/chat.astro.mjs","\u0000@astro-page:src/pages/chatbubble@_@astro":"pages/chatbubble.astro.mjs","\u0000@astro-page:src/pages/mit-license@_@md":"pages/mit-license.astro.mjs","\u0000@astro-page:src/pages/readme@_@astro":"pages/readme.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.0.0-beta.8_@types+node@22.9.0_jiti@1.21.6_rollup@4.27.2_typescript@5.6.3_yaml@2.6.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/toc/Server/ONE/local/one/node_modules/.pnpm/astro@5.0.0-beta.8_@types+node@22.9.0_jiti@1.21.6_rollup@4.27.2_typescript@5.6.3_yaml@2.6.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_uVSgQz82.mjs","/Users/toc/Server/ONE/local/one/node_modules/.pnpm/astro@5.0.0-beta.8_@types+node@22.9.0_jiti@1.21.6_rollup@4.27.2_typescript@5.6.3_yaml@2.6.0/node_modules/astro/dist/env/setup.js":"chunks/setup_Cr6XTFvb.mjs","/Users/toc/Server/ONE/local/one/node_modules/.pnpm/@astrojs+react@3.6.2_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.3.1_react@18.3_n3soadizypxjrnidgrvcafrpkm/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","\u0000@astrojs-manifest":"manifest_CtQynfgE.mjs","/Users/toc/Server/ONE/local/one/src/components/Chat":"_astro/Chat.CvqBVAwT.js","/Users/toc/Server/ONE/local/one/src/components/ChatBubble":"_astro/ChatBubble.BeuQw8xk.js","/Users/toc/Server/ONE/local/one/src/components/Chart":"_astro/Chart.Cwc9-PJq.js","@/components/Sidebar":"_astro/Sidebar.BguH6gWU.js","@astrojs/react/client.js":"_astro/client.69qQNmOw.js","/Users/toc/Server/ONE/local/one/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.rwlQbLao.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/chat.DB9cTGZC.css","/_astro/mit-license.aLNeWzrP.css","/favicon.svg","/icon.svg","/logo.png","/logo.svg","/robots.txt","/_astro/Chart.Cwc9-PJq.js","/_astro/Chat.CvqBVAwT.js","/_astro/ChatBubble.BeuQw8xk.js","/_astro/Layout.astro_astro_type_script_index_0_lang.rwlQbLao.js","/_astro/Sidebar.BguH6gWU.js","/_astro/client.69qQNmOw.js","/_astro/index.Cy6fXh2N.js","/_astro/index.DWKhlr8t.js","/_astro/index.DrJg9Js7.js","/_astro/jsx-runtime._qNxob7_.js","/_astro/layout.SWj4vNTz.js","/_astro/thread.Co-DP7xE.js","/_astro/utils.Cj58wjms.js","/screenshots/astro-shadcn.mov","/screenshots/lighthouse-desktop.png","/screenshots/lighthouse-mobile.png","/screenshots/screenshot-dark.png","/screenshots/screenshot-light.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"aDgBJJN0U+c4rdemDePQ9itHiuXRHtMYDSDzoXlbymo=","envGetSecretEnabled":true});

export { manifest };
