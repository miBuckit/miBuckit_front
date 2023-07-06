import MainLayout from "@/components/app/Layout";
import Link from "next/link";
import path from "path";

export default function Home() {
  const test = [
    {
      path: "img/1.jpeg",
      name: "오은혜",
      cntn: "은혜약국"
    }, {
      path: "img/2.jpeg",
      name: "오은해",
      cntn: "베스트 드라이버"
    }, {
      path: "img/3.jpeg",
      name: "오은해",
      cntn: "상습서운하게하기형"
    }, {
      path: "img/4.jpeg",
      name: "이승제",
      cntn: "상습서운해하기형"
    },{
      path: "img/5.jpeg",
      name: "오은혜",
      cntn: "은해이직"
    }, {
      path: "img/6.jpeg",
      name: "오은해",
      cntn: "베스트 드라이버"
    }, {
      path: "img/7.jpeg",
      name: "오은해",
      cntn: "상습서운하게하기형"
    }, {
      path: "img/8.jpeg",
      name: "이승제",
      cntn: "상습서운해하기형"
    }, {
      path: "img/9.jpeg",
      name: "이승제",
      cntn: "상습서운해하기형"
    }
  ]

  const imgList = test.map((item) => (
    <a href="#" className="group ">
      <div className="max-h-200 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img src={item.path} className="h-300"></img>
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{item.cntn}</p>
    </a>
  ));
  return (
    <MainLayout>
      
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="text-gray-600 flex space-x-3 border-b-2">
            <h2>
              정렬 : 
            </h2>
            <button>최신순</button>
            <button>인기순</button>
          </div>
          <div className="py-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {imgList}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
