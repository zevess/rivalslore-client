import qs from "qs";
import type { Route } from "./+types/_index";
import { ArticleCard } from "~/shared/ui/article-card";


interface Article {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: {
    url: string;
    alternativeText: string;
  };
}

interface ArticleResponse {
  data: Article[];
}

interface LoaderData {
  articlesData: ArticleResponse;
}

// Server Side Loader
export async function loader({ params }: Route.LoaderArgs) {
  const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
  const path = "/api/articles";
  const url = new URL(path, BASE_URL);

  url.search = qs.stringify({
    populate: {
      cover: {
        fields: ["url", "alternativeText"],
      },
    },
  });

  const articlesData = await fetch(url.href);
  const data = await articlesData.json();
  return { articlesData: data as ArticleResponse };
}

export function meta(/*{}: Route.MetaArgs */) {
  return [
    { title: "Home | React Router 7" },
    { name: "description", content: "Home Page" },
  ];
}

export default function IndexRoute({ loaderData }: { loaderData: LoaderData }) {
  if (!loaderData) return <p>No data found</p>;
  return (
    <div className="">
      <div className="flex flex-col items-center gap-4 h-full w-full ">
        <img src="app/shared/assets/bg.jpg" className="mask-x-from-80% mask-x-to-100% mask-y-from-90% mask-y-to-100%  bg-no-repeat" alt="" />
        <div className="flex flex-col">
          <h1 className="font-extrabold text-7xl text-center text-white">Добро пожаловать <br /> в RIVALSLORE</h1>
          <h2 className="font-medium text-4xl text-center text-white">- сайт с официальным лором игры</h2>
          <img src="app/shared/assets/rivals-logo.png" className="scale-75" />
        </div>
      </div>

    </div>
    // <div className="container mx-auto px-4 py-8 bg-green-500">
    //   <div className="flex flex-wrap">
    //     {loaderData.articlesData.data.map((article: Article) => (
    //       <ArticleCard
    //         key={article.id}
    //         title={article.title}
    //         description={article.description}
    //         publishedAt={article.publishedAt}
    //         slug={article.slug}
    //         cover={article.cover}
    //       />
    //     ))}
    //   </div>
    // </div>
  );
}