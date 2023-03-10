import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";
import {
  HiOutlineHome,
  HiSearch,
  HiOutlineInboxIn,
  HiOutlineFolder,
  HiOutlineUsers,
  HiOutlineMenuAlt1,
} from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import { IoIosCog } from "react-icons/io";
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "B2B Admin Control",
  description:
    "ReactJS app to administrate a B2B Merchant e-commerce platform.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="wireframe" lang="en">
      <body className={`${poppins.className} bg-gray-100`}>
        <div className="drawer ">
          <input id="b2bdrawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* <!-- Navbar --> */}
            <div className="w-full navbar bg-white border-b border-borderGray container lg:mt-5 shadow lg:rounded-md">
              <div className="flex-none lg:hidden">
                <label htmlFor="b2bdrawer" className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2">
                <label
                  htmlFor="b2bdrawer"
                  className=" hidden lg:inline-block mr-2 cursor-pointer"
                >
                  <HiOutlineMenuAlt1 />
                </label>
                <HiSearch className="text-xl" />
              </div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* <!-- Navbar menu content here --> */}
                </ul>
              </div>
            </div>
            {/* <!-- Page content here --> */}
            {children}
          </div>
          <div className="drawer-side ">
            <label htmlFor="b2bdrawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100">
              {/* <!-- Sidebar content here --> */}
              <li>
                <Link href={"/"} className="flex items-center mt-5">
                  <HiOutlineHome className="text-3xl text-gray-500" /> Dashboard
                </Link>
              </li>
              <li>
                <Link href={"/orders"} className="flex items-center">
                  <HiOutlineInboxIn className="text-3xl text-gray-500" /> Orders
                </Link>
              </li>
              <li>
                <Link href={"/products"} className="flex items-center">
                  <BsBox className="text-3xl text-gray-500" /> Products
                </Link>
              </li>
              <li>
                <Link href={"/customers"} className="flex items-center">
                  <HiOutlineUsers className="text-3xl text-gray-500" />{" "}
                  Customers
                </Link>
              </li>
              <li>
                <Link href={"/"} className="flex items-center">
                  <HiOutlineFolder className="text-3xl text-gray-500" />{" "}
                  Categories
                </Link>
              </li>
              <li>
                <Link href={"/"} className="flex items-center">
                  <IoIosCog className="text-3xl text-gray-500" /> Settings
                </Link>
              </li>

              <li className="absolute -top-1 right-0 ">
                <label htmlFor="b2bdrawer" className="cursor-pointer">
                  <AiOutlineClose />
                </label>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
