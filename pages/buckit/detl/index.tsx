import MainLayout from "@/components/app/Layout";

export default function Detl() {
  return (
    <MainLayout>
      <div className="bg-white">
        <h1 className="center">상세</h1>
        <div className="flex justify-center w-screen mx-auto">
          <h2 className="sr-only">Products</h2>
          <div className="grid">
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
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
