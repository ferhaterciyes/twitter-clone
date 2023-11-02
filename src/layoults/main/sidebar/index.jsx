import Logo from "./logo"
import Menu from "./menu"
import Account from "./account"
Logo
const Sidebar = () => {
  return (
    <aside className="w-[275px] min-h-screen max-h-screen px-2 flex flex-col sticky top-0">
     <Logo />
     <Menu />
     <Account />
    </aside>
  )
}

export default Sidebar