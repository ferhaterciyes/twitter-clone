import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Rightbar from "./rightbar";
import { useModal } from './../../store/modal/hooks';
import Modal from "../../modals";
import { useEffect } from "react";
import { useAppearance } from "../../store/appearance/hooks";

const MainLayout = () => {

  const modal = useModal()
  const appearance = useAppearance()

useEffect(()=>{
document.documentElement.style.setProperty("--backgraund-primary", appearance.backgraundColor.primary);
document.documentElement.style.setProperty("--backgraund-primary-alpha", appearance.backgraundColor.primary + "a6");

document.documentElement.style.setProperty("--backgraund-secondary",appearance.backgraundColor.secondary)
document.documentElement.style.setProperty("--backgraund-third",appearance.backgraundColor.third)
document.documentElement.style.setProperty("--backgraund-modal",appearance.backgraundColor.modal)


document.documentElement.style.setProperty("--color-primary",appearance.color.primary)
document.documentElement.style.setProperty("--color-primary-alpha",appearance.color.primary +  "12")

document.documentElement.style.setProperty("--color-secondary",appearance.color.secondary)
document.documentElement.style.setProperty("--color-base",appearance.color.base)
document.documentElement.style.setProperty("--color-base-secondary",appearance.color.baseSecondary)

document.documentElement.style.setProperty("--box-shadow",appearance.color.baxShadow)


document.documentElement.style.setProperty("--font-size",appearance.fontSize +"px")



},[appearance])




  return (
    <div className="w-[1265px] mx-auto flex">
      {modal && <Modal />}
      <Sidebar />
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[color:var(--backgraund-third)]">
          <Outlet />
        </main>
        <Rightbar />
      </main>
    </div>
  );
};

export default MainLayout;
