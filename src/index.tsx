import { ViteReactSSG } from "vite-react-ssg";
import type { RouteRecord } from "vite-react-ssg";
import { ElementDefault } from "./screens/ElementDefault";
import { ElementFounders } from "./screens/ElementFounders";
import { PrivacyPolicy } from "./screens/PrivacyPolicy/PrivacyPolicy";

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
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
    entry: "src/screens/PrivacyPolicy/PrivacyPolicy.tsx",
  },
];

export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
});
