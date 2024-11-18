/* empty css                                */
import { c as createComponent, b as createAstro, r as renderTemplate, a as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_ecZQj7dM.mjs';
import { $ as $$Layout } from '../chunks/Layout_DLzvd24v.mjs';
import { marked } from 'marked';
export { renderers } from '../renderers.mjs';

const README = "# 🚀 Astro 5 + Shadcn/UI Starter Kit\n\nA lightning-fast starter template combining Astro's performance with Shadcn's beautiful components.\n\n### 🎨  Screenshots\n![Dark Mode](https://astro-shadcn.agentc.app/screenshots/screenshot-dark.png)\n![Light Mode](https://astro-shadcn.agentc.app/screenshots/screenshot-light.png)\n\n\n## ⚡ Quick Start\n\n```bash\n# Clone the repository\ngit clone https://github.com/agentc-app/astro-shadcn.git\n\n# Navigate to project\ncd astro-shadcn\n\n# Install dependencies\nnpm install\n\n# Start development server\nnpm run dev\n```\n\nVisit `http://localhost:4321` - You're ready to go! 🎉\n\n## 🎨 Pre-installed Components\n\nAll Shadcn/UI components are pre-configured for Astro:\n\n```astro\n---\n// Example usage in .astro file\nimport { Button } from \"@/components/ui/button\"\nimport { Card } from \"@/components/ui/card\"\n---\n\n<Button>Click me!</Button>\n```\n\n### Available Components\n- ✅ Accordion\n- ✅ Alert Dialog\n- ✅ Avatar\n- ✅ Badge\n- ✅ Button\n- ✅ Card\n- ✅ Dialog\n- ... and more!\n\n## 🛠️ Project Structure\n\n```text\nyour-project/\n├── src/\n│   ├── components/\n│   │   └── ui/          # All Shadcn components\n│   ├── layouts/\n│   │   └── Layout.astro # Base layout\n│   └── pages/\n│       └── index.astro  # Homepage\n├── astro.config.mjs     # Astro configuration\n└── tailwind.config.cjs  # Tailwind configuration\n```\n\n## 🔧 Configuration\n\n### Astro is Setup\n```js\n// astro.config.mjs\nimport { defineConfig } from 'astro/config';\nimport tailwind from '@astrojs/tailwind';\nimport react from '@astrojs/react';\n\nexport default defineConfig({\n  integrations: [\n    tailwind(),\n    react(), // Required for Shadcn components\n  ],\n  // Error suppression\n  vite: {\n    build: {\n      suppressWarnings: true,\n    }\n  }\n});\n```\n\n### Using Components\n\n```astro\n---\n// src/pages/index.astro\nimport { Button } from \"@/components/ui/button\";\nimport { Card, CardHeader, CardTitle } from \"@/components/ui/card\";\n---\n\n<Card>\n  <CardHeader>\n    <CardTitle>Welcome to Astro + Shadcn!</CardTitle>\n  </CardHeader>\n  <Button client:load>Interactive Button</Button>\n</Card>\n```\n\n## 🚀 Development Workflow\n\n1. **Start Development**\n   ```bash\n   npm run dev\n   ```\n\n2. **Using React Components in Astro**\n   ```astro\n   ---\n   // Always add client:load for interactive components\n   import { Dialog } from \"@/components/ui/dialog\"\n   ---\n   \n   <Dialog client:load>\n     <!-- Dialog content -->\n   </Dialog>\n   ```\n\n3. **Build for Production**\n   ```bash\n   npm run build\n   npm run preview # Test the production build\n   ```\n\n## 🔍 Troubleshooting\n\n### Common Issues Solved\n\n✅ **Component Hydration**: All interactive components use `client:load`\n✅ **Build Warnings**: Suppressed in configuration\n✅ **Path Aliases**: Pre-configured for easy imports\n✅ **React Integration**: Properly set up for Shadcn\n\n### Quick Fixes\n\n1. **Clear Cache**\n   ```bash\n   rm -rf dist node_modules .astro\n   npm install\n   ```\n\n2. **Restart Dev Server**\n   ```bash\n   # Kill the dev server and restart\n   npm run dev\n   ```\n\n## 💡 Pro Tips\n\n1. **Component Usage in Astro**\n   ```astro\n   ---\n   // Always import in the frontmatter\n   import { Button } from \"@/components/ui/button\"\n   ---\n   \n   <!-- Use in template -->\n   <Button client:load>Click me!</Button>\n   ```\n\n2. **Styling with Tailwind**\n   ```astro\n   <div class=\"dark:bg-slate-800\">\n     <Button class=\"m-4\">Styled Button</Button>\n   </div>\n   ```\n\n3. **Layout Usage**\n   ```astro\n   ---\n   import Layout from '../layouts/Layout.astro';\n   ---\n   \n   <Layout title=\"Home\">\n     <!-- Your content -->\n   </Layout>\n   ```\n\n## 📊 Performance & Screenshots\n\n### ⚡ Lighthouse Scores\n![Desktop Performance](https://astro-shadcn.agentc.app/screenshots/lighthouse-desktop.png)\n![Mobile Performance](https://astro-shadcn.agentc.app/screenshots/lighthouse-mobile.png)\n\nPerfect scores across all metrics:\n- 🚀 Performance: 100\n- ♿ Accessibility: 100\n- 🔧 Best Practices: 100\n- 🔍 SEO: 100\n\n\n\n## 📚 Quick Links\n\n- [Astro Documentation](https://docs.astro.build)\n- [Shadcn/UI Components](https://ui.shadcn.com/docs/components/accordion)\n- [Tailwind CSS Docs](https://tailwindcss.com/docs)\n\n## 🤝 Need Help?\n\n- Join [Astro Discord](https://astro.build/chat)\n- Check [Astro Documentation](https://docs.astro.build)\n- File an [Issue on GitHub](https://github.com/agentc-app/astro-shadcn/issues)\n\n---\n\nBuilt with 🚀 Astro and 🎨 Shadcn/UI by [AgentC](https://agentc.app)\n";

async function getReadme() {
  return marked(README);
}

const $$Astro = createAstro();
const $$Readme = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Readme;
  const readme = await getReadme();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "README - Astro + shadcn/ui" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="prose dark:prose-invert max-w-none"> <article>${unescapeHTML(readme)}</article> </div> ` })}`;
}, "/Users/toc/Server/ONE/local/one/src/pages/readme.astro", void 0);

const $$file = "/Users/toc/Server/ONE/local/one/src/pages/readme.astro";
const $$url = "/readme";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Readme,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
