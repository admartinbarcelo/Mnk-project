import Header from "../Components/header/Header";
import Products from "../Components/products/Products";
import InfoCBD from "../Components/info/infoCBD";
import TypesProduct from "../Components/typesproduct/typesProduct";
import Footer from "../Components/footer/Footer";

import EllipseCBD from "../assets/ellipseCBD.png";
import CBDLogo from "../assets/cbdLogo.png";

import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Header />
      <h2 className="novedades__title">Novedades</h2>
      <Products />
      <div className="cbd__title__container">
        <img src={EllipseCBD} alt="Ellipse" className="ellipse__image" />
        <img src={CBDLogo} alt="CBD Logo" className="cbd__logo" />
        <h2 className="cbd__title">¿Qué es el CBD</h2>
      </div>
      <InfoCBD />
      <h2 className="tipos__producto__title">Tipos de producto</h2>
      <TypesProduct />
      <div className="recomend__container">

      <h2 className="recomendamos__title">Te recomendamos</h2>
      </div>
      <Products />
      <Footer />

    </>
  );
}

export default HomePage;
