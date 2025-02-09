import { Outlet } from "react-router";
import type { Route } from "./+types/layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CommentQA" },
    { name: "description", content: "Welcome to the CommentQA " },
  ];
}

export default function Layout() {
  return (
    <div className="h-screen w-full md:grid grid-cols-2">
      <div className="bg-gray-100">
        {/* Banner/Left side */}
        <h1 className="text-3xl font-bold p-8 text-center md:text-left">
          CommentQA
        </h1>
      </div>
      <div className="p-8 flex flex-col justify-center">
        {/* Right side with outlet */}
        <Outlet />
      </div>
    </div>
  );
}
