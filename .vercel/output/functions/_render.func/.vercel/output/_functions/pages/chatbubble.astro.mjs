/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_B_KtmydP.mjs';
import { $ as $$Layout } from '../chunks/Layout_veviYV1W.mjs';
import { jsx } from 'react/jsx-runtime';
import { useEdgeRuntime, AssistantModal } from '@assistant-ui/react';
export { renderers } from '../renderers.mjs';

const ChatModal = () => {
  const runtime = useEdgeRuntime({
    api: "/api/chat/openai-gpt4"
  });
  return /* @__PURE__ */ jsx(AssistantModal, { runtime });
};

const $$Chatbubble = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Chat" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ChatComponent", ChatModal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/toc/Server/ONE/local/one/src/components/ChatBubble", "client:component-export": "default" })} ` })}`;
}, "/Users/toc/Server/ONE/local/one/src/pages/chatbubble.astro", void 0);

const $$file = "/Users/toc/Server/ONE/local/one/src/pages/chatbubble.astro";
const $$url = "/chatbubble";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Chatbubble,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
