import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "CommentQA" },
    { name: "description", content: "Welcome to the CommentQA " },
  ];
}

export default function Home() {
  return <Welcome />;
}
