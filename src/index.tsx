import { ViteReactSSG } from "vite-react-ssg";
import type { RouteRecord } from "vite-react-ssg";
import { ElementDefault } from "./screens/ElementDefault";
import { ElementFounders } from "./screens/ElementFounders";
import { BlogIndex, BlogPost } from "./screens/Blog";
import { PrivacyPolicy } from "./screens/PrivacyPolicy/PrivacyPolicy";
import { getAllSlugs } from "./lib/blog";

const routes: RouteRecord[] = [
  {
    path: "/",
    element: <ElementDefault />,
    entry: "src/screens/ElementDefault/ElementDefault.tsx",
  },
  {
    path: "/founders",
    element: <ElementFounders />,
    entry: "src/screens/ElementFounders/ElementFounders.tsx",
  },
  {
    path: "/blog",
    element: <BlogIndex />,
    entry: "src/screens/Blog/BlogIndex.tsx",
  },
  {
    path: "/blog/:slug",
    element: <BlogPost />,
    entry: "src/screens/Blog/BlogPost.tsx",
    getStaticPaths: () => getAllSlugs().map((slug) => `/blog/${slug}`),
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
    entry: "src/screens/PrivacyPolicy/PrivacyPolicy.tsx",
  },
];

export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
});
