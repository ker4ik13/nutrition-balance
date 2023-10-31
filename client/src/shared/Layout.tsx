import Nav from "@/widgets/Nav";
import Footer from "@/widgets/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" grid grid-rows-[auto_1fr_auto] h-screen font-gilroy">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
