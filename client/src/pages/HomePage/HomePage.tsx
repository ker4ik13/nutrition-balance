import HelloScreen from "@/widgets/HelloScreen/HelloScreen";
import styles from "./HomePage.module.scss";
import AboutMe from "@/widgets/AboutMe/AboutMe";
import Skills from "@/widgets/Skills/Skills";
import DiscussForm from "@/widgets/DiscussForm/DiscussForm";
import MyWorks from "@/widgets/MyWorks/MyWorks";
import Blog from "@/widgets/Blog/Blog";

const HomePage = () => {
  return (
    <div className={styles.div}>
      <HelloScreen />
      <AboutMe />
      <Skills />
      <MyWorks />
      <DiscussForm />
      <Blog />
    </div>
  );
};

export default HomePage;
