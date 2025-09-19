import { DialogDemo } from "~/shared/ui/dialog";


export function meta(/*{}: Route.MetaArgs */) {
  return [
    { title: "Home | React Router 7" },
    { name: "description", content: "Home Page" },
  ];
}

export default function IndexRoute() {
  
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
    
  );
}