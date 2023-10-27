import Nav from "@/widgets/Nav/Nav";
import Footer from "@/widgets/Footer/Footer";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
