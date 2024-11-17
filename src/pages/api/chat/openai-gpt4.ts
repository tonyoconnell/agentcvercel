import { openai } from "@ai-sdk/openai";
import { createEdgeRuntimeAPI } from "@assistant-ui/react/edge";

// Enable server-rendering for this endpoint
export const prerender = false;

// Create API endpoint with proper configuration
export const POST = async ({ request }: { request: Request }) => {
  try {
    // Create a clone of the request to read the body
    const clonedRequest = request.clone();
    
    // Log the request data
    const body = await clonedRequest.text();
    console.log("Received request data:", JSON.parse(body));

    const api = createEdgeRuntimeAPI({
      model: openai("gpt-4o-mini"),
    });
    
    // Use the original request for the API call
    return api.POST(request);
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
