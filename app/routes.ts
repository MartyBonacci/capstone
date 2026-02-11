import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("projects/customcult", "routes/projects/customcult.tsx"),
  route("projects/specswarm", "routes/projects/specswarm.tsx"),
  route("projects/frame-injection", "routes/projects/frame-injection.tsx"),
  route("projects/four-minds", "routes/projects/four-minds.tsx"),
  route("concepts", "routes/concepts/index.tsx"),
  route("concepts/classes", "routes/concepts/classes.tsx"),
  route("concepts/inheritance", "routes/concepts/inheritance.tsx"),
  route("concepts/gui", "routes/concepts/gui.tsx"),
  route("concepts/file-persistence", "routes/concepts/file-persistence.tsx"),
  route("concepts/database", "routes/concepts/database.tsx"),
  route("concepts/web-research", "routes/concepts/web-research.tsx"),
] satisfies RouteConfig;
