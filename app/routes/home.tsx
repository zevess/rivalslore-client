import type { Route } from "./+types/home";

import { HomePage } from "~/pages/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Главная" },
    { name: "description", content: "Добро пожаловать на RIVALSLORE" },
  ];
}

export default function Home() {
  return <HomePage />;
}
