import "./headerInfo.css";
import PremiumIcon from "../../assets/Premium.png";
import CanabisIcon from "../../assets/Cannabidiol.png";
import HeartIcon from "../../assets/Bienestar.png";
import NosotrasIcon from "../../assets/Nosotras.png";
import LeftIcon from "../../assets/arrow-right-circle.png";
import RightIcon from "../../assets/arrow-right-circle-1.png";

function HeaderInfo() {
  return (
    <div className="header-container">
      <div className="kit-image">
        <img className="icon-bottom-left" src={LeftIcon} alt="left-icon" />
        <img className="icon-bottom-right" src={RightIcon} alt="right-icon" />
      </div>

      <div className="title-container">
        <h1 className="title">
          Botanical <br /> Premium <br />
          Cosmetics
        </h1>

        <p className="description">
          Apostamos por ofrecerte los mejores <br /> cosméticos naturales, a
          base de cáñamo,
          <br /> para un cuidado completo de tu piel.
        </p>

        <div className="item-container">
          <div className="item-header">
            <img className="icon" src={PremiumIcon} alt="premium-icon" />
            <h2 className="item-title">Premium</h2>
          </div>
          <p className="item-description">
            Apostamos por ofrecerte los mejores comséticos naturales
          </p>
        </div>

        <div className="item-container">
          <div className="item-header">
            <img className="icon" src={CanabisIcon} alt="cannabidiol-icon" />
            <h2 className="item-title">Cannabidiol</h2>
          </div>
          <p className="item-description">
            Uno de los compuestos con mayores beneficios para la salud
          </p>
        </div>

        <div className="item-container">
          <div className="item-header">
            <img className="icon" src={HeartIcon} alt="heart-icon" />
            <h2 className="item-title">Bienestar</h2>
          </div>
          <p className="item-description">
            Productos pensados para mejorar tu bienestar y sentirte bien
          </p>
        </div>

        <div className="item-container">
          <div className="item-header">
            <img className="icon" src={NosotrasIcon} alt="nosotras-icon" />
            <h2 className="item-title">Nosotras</h2>
          </div>
          <p className="item-description">
            The Good Cream, un lugar donde te sientes acompañada
          </p>
        </div>
        <div className="container-button">
          <div className="button">
            <p>Ver productos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderInfo;
