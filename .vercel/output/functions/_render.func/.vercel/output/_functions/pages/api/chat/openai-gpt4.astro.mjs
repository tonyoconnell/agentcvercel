import { openai } from '@ai-sdk/openai';
import { createEdgeRuntimeAPI } from '@assistant-ui/react/edge';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const clonedRequest = request.clone();
    const body = await clonedRequest.text();
    console.log("Received request data:", JSON.parse(body));
    const api = createEdgeRuntimeAPI({
      model: openai("gpt-4o-mini")
    });
    return api.POST(request);
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
