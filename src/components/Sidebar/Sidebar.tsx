import Image from 'next/image';
import {
  IoBarcodeOutline,
  IoBrowsersOutline,
  IoLogoReact,
} from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';

const menuItems = [
  {
    path: '/dashboard/products/picking',
    icon: <IoBarcodeOutline size={30} />,
    title: 'Picking',
    subTitle: 'PickProducts',
  },
  {
    path: '/dashboard/products',
    icon: <IoBrowsersOutline size={30} />,
    title: 'Products',
    subTitle: 'Maintainer',
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 w-1/3 min-h-screen z-10 text-slate-300 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="inline-block w-6 h-6 mr-2" />
          My <span className="text-blue-500">Store</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="/avatar.png"
              alt="User avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Sebastian Silva
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
