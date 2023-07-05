import MainLayout from "@/components/app/Layout";
import Link from "next/link";

export default function Home() {
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
          <h2 className="sr-only">Products</h2>
          <div className="py-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <div>이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                </div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">은헤이직</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">오멋쟁이</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <div>이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                </div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">은헤애니메이션스타일</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">오멋쟁이</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <div>이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                </div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">은해멋진디자인포폴</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">오멋쟁이</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <div>이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                </div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">은해대단하다</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">오멋쟁이</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <div>이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                </div>
              <div></div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">대다나나더</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">오멋쟁이</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <div>이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                </div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">노란빛의포트폴리오</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">오멋쟁이</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <div>이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                </div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">초코케잌포트폴리오</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">오멋쟁이</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <div>이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                이미지이미지이미지이미지이미지이미<br/>
                </div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">푸헤헤스타일포폴</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">오멋쟁이</p>
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
