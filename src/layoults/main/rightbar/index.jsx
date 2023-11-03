
import Footer from "./footer";
import Premium from "./premium"
import Search from "./search"
import Topics from './topics/index';
import WhoFollow from "./who-follow";

const Rightbar = () => {
  return (
    <aside className="w-[350px] mr-2.5">
       <Search />
       <Premium />
       <Topics />
       <WhoFollow />
       <Footer />
    </aside>
  )
}

export default Rightbar