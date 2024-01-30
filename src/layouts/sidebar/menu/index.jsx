import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {mainMenu} from "~/utils/consts.jsx";
export default function Menu() {

    return (
        <nav className={"mt-0.5 mb-1"}>
            {mainMenu.map((menu, index) => (
                <NavLink to={menu.path} className={"py-1 block group"}>
                    {({isActive}) => (
                        <div
                            className={classNames("p-3 rounded-full inline-flex transition-colors items-center gap-5 group-hover:bg-[#eff3f41a]" , {
                                "font-bold": isActive
                            })}>
                           <div className="w-[26.25px] h-[26.25px] relative">
                               <span>
                                      {menu.notification && (
                                        <span className="absolute -top-1.5 -right-1 bg-[#1d9bf0] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] text-white">
                                             {menu.notification}
                                        </span>
                                      )}
                               </span>
                               {!isActive && menu.icon.pasive}
                               {isActive && menu.icon.active}
                           </div>

                            <div className={"text-xl pr-4"}>
                                {menu.title}
                            </div>
                        </div>
                    )}
                </NavLink>
            ))}
        </nav>

    )

}