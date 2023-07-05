import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const navigation = [
  { name: "main", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default function Navbar() {
  const [logOn, setLogOn] = useState("off");
  const [isNotiOpen, setIsNotiOpen] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const loginTest = () => {
    setLogOn("on");
  };

  const logoutTest = () => {
    setLogOn("off");
  };

  const toggleProfile = () => {
    setIsSettingOpen((isSettingOpen) => !isSettingOpen);
    console.log(isSettingOpen);
  };

  const toggleNoti = () => {
    setIsNotiOpen((isNotiOpen) => !isNotiOpen);
    console.log(isNotiOpen);
  };

  useEffect(() => { }, []);
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              ></img>
              <img
                className="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              ></img>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-3">
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  메인
                </Link>
                <Link
                  href="/buckit/detl"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  상세
                </Link>
                <Link
                  href="/buckit/profile"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  프로필
                </Link>
              </div>
            </div>
          </div>
          {/* 오른쪽 구역 */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {logOn != "on" ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div>
                  {/* <Link
                  
                    href="/entr/signIn"
                    className="hidden text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium lg:inline"
                  >
                    로그인
                  </Link> */}
                  <button
                    className="hidden text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium lg:inline"
                    onClick={loginTest}
                  >
                    로그인
                  </button>
                  <Link
                    href="/entr/signUp"
                    className="hidden text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium lg:inline"
                  >
                    회원가입
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="relative ml-3">
                  <div>
                    {/* 알림버튼 */}
                    <button
                      type="button"
                      className="lg:inline rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={toggleNoti}
                    >
                      <span className="sr-only">View notifications</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* 알림 아래 div */}
                  <div
                    className={
                      (isNotiOpen ? "" : "hidden" + " ") +
                      "absolute right-0 z-10 mt-2 w-128px origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    }
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      id="user-menu-item-0"
                    >
                      설정
                    </Link>
                    <button
                      className="absolute top-2 right-2 text-gray-700"
                      onClick={logoutTest}
                    >
                      x
                    </button>
                  </div>
                </div>
                {/* 프로필 이미지 */}
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="lg:inline flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={toggleProfile}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      ></img>
                    </button>
                  </div>
                  {/* 프로필 사진 아래 div */}

                  <div
                    className={
                      (isSettingOpen ? "" : "hidden" + " ") +
                      "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    }
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      id="user-menu-item-0"
                    >
                      설정
                    </Link>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700"
                      onClick={logoutTest}
                    >
                      로그아웃
                    </button>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            메인
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            상세
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            프로필
          </Link>
        </div>
      </div>
    </nav>
  );
}
