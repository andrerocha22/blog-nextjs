import Navbar from "../../Navbar";
import Footer from "../../Footer";

const MainLayout = ({ children }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <header>
      <Navbar />
    </header>
    <div className="content-wrapper">{children}</div>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default MainLayout;
