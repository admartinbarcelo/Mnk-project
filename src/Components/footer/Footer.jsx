import "./footer.css";
import Arrow from "../../assets/arrow-right-email.png";

function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__top">
        <h3 className="footer__title">
          Newsletter <br />
          The Good Cream
        </h3>
        <p className="footer__description">
          Suscríbete para recibir <br /> novedades y ofertas exclusivas
        </p>
        <div className="footer__email-container">
          <p className="footer__email">Dirección de correo</p>
          <img src={Arrow} alt="Arrow__image-email" className="footer__image" />
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__info">
          <h4 className="footer__subtitle">INFORMACIÓN</h4>
          <p>¿Qué es CBD?</p>
          <p>Nosotras</p>
          <p>Blog</p>
          <p>FAQs</p>
        </div>
        <div className="footer__products">
          <h4 className="footer__subtitle">PRODUCTOS</h4>
          <p>Facial</p>
          <p>Corporal</p>
          <p>Cofres</p>
        </div>
        <div className="footer__social-policy-wrapper">
          <div className="footer__social">
            <h4 className="footer__subtitle">SOCIAL</h4>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
          <div className="footer__policy">
            <p>Politica de privacidad</p>
            <p>Condiciones de uso y venta</p>
            <p>Aviso legal</p>
            <p>Política de reembolso</p>
          </div>
        </div>
        <div className="footer__contact">
          <h4 className="footer__subtitle">CONTACTO</h4>
          <p>Hello@thegoodcream.com</p>
        </div>
      </div>
      <div className="footer__copyright">
        <hr className="footer__line" />
        <p>© 2022 THE GOOD CREAM</p>
      </div>
    </footer>
  );
}

export default Footer;
