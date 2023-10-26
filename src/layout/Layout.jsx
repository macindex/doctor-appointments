// import Header from "../components/Header/Header";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
