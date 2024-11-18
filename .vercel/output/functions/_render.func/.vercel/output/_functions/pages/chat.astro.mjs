/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_B_KtmydP.mjs';
import { $ as $$Layout } from '../chunks/Layout_veviYV1W.mjs';
import { jsx } from 'react/jsx-runtime';
import { useEdgeRuntime, Thread } from '@assistant-ui/react';
export { renderers } from '../renderers.mjs';

const Chat = ({ className = "" }) => {
  const runtime = useEdgeRuntime({
    api: "/api/chat/openai-gpt4"
  });
  return /* @__PURE__ */ jsx("div", { className: `h-full ${className}`, children: /* @__PURE__ */ jsx(Thread, { runtime }) });
};

const $$Chat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Chat" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ChatComponent", Chat, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/toc/Server/ONE/local/one/src/components/Chat", "client:component-export": "default" })} ` })}`;
}, "/Users/toc/Server/ONE/local/one/src/pages/chat.astro", void 0);

const $$file = "/Users/toc/Server/ONE/local/one/src/pages/chat.astro";
const $$url = "/chat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Chat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
