import { useState } from "react";
import Lucide from "../../base-components/Lucide";
import { Menu} from "../../base-components/Headless";
import _ from "lodash";
import clsx from "clsx";

function Main(props: { toggleMobileMenu: (event: React.MouseEvent) => void, logout: () => void, getMe: any }) {
  console.log("Main TopBar", props.getMe.userData);
  return (
    <>
      {/* BEGIN: Top Bar */}
      <div
        className={clsx([
          "h-[63px] z-[51] sticky top-[10px] xl:mx-[10px] flex items-center px-5",
          "before:content-[''] before:absolute before:h-3 before:top-0 before:inset-x-0 before:-mt-3 before:z-[-1] before:bg-gradient-to-b before:from-slate-100/50 before:to-slate-100/[0.93] before:dark:from-darkmode-700/50 before:dark:to-darkmode-700/[0.93]",
          "after:content-[''] after:shadow-[0_3px_15px_rgb(0_0_0_/_7%)] after:absolute after:inset-0 after:bg-white after:border after:border-slate-200 after:rounded-xl after:dark:bg-darkmode-600 after:dark:border-darkmode-500",
        ])}
      >
        {/* BEGIN: Mobile Menu */}
        <div className="mr-3 -intro-x xl:hidden sm:mr-6">
          <div
            className="cursor-pointer w-[38px] h-[38px] rounded-full border border-slate-200 flex items-center justify-center dark:border-white/20"
            onClick={props.toggleMobileMenu}
          >
            <Lucide
              icon="BarChart2"
              className="w-5 h-5 transform rotate-90 dark:text-slate-500"
            />
          </div>
        </div>
        {/* END: Mobile Menu */}
        {/* BEGIN: Account Menu */}
        <div className="flex items-center ml-auto">
          <Menu className="h-10 intro-x">
            <Menu.Button className="flex items-center h-full dropdown-toggle">
              <div className="w-8 h-8 image-fit">
                <Lucide icon="User" className="w-6 h-6 mr-2" />
              </div>
              <div className="hidden ml-1 md:block">
                <div className="max-w-[7rem] truncate font-medium">
                  {props.getMe.userData && props.getMe.userData.name}
                </div>
              </div>
            </Menu.Button>
            <Menu.Items className="w-56 mt-px">
              <Menu.Item
                onClick={props.logout}
              >
                <Lucide icon="ToggleRight" className="w-4 h-4 mr-2" /> Logout
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        {/* END: Account Menu */}
      </div>
      {/* END: Top Bar */}
    </>
  );
}

export default Main;
