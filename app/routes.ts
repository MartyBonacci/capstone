import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("projects/customcult", "routes/projects/customcult.tsx"),
  route("projects/specswarm", "routes/projects/specswarm.tsx"),
  route("projects/frame-injection", "routes/projects/frame-injection.tsx"),
  route("projects/four-minds", "routes/projects/four-minds.tsx"),
] satisfies RouteConfig;
