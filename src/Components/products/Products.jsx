import './Products.css';
import productsData from '../../products.json';
import LeftIcon from "../../assets/arrow-right-circle.png";
import RightIcon from "../../assets/arrow-right-circle-1.png";

import serum from '../../assets/serum.png';
import crema from '../../assets/crema.png';
import locion from '../../assets/locion.png';

const images = {
  serum,
  crema,
  locion
};

function Products() {
  return (
    <div className="products">
      {productsData.map((product, index) => (
        <div
          key={product.id}
          className={`product ${index === 1 ? 'id2' : ''}`}
        >
          <img src={images[product.image]} alt={product.name} />
          <p className='product__subtitle'>{product.subtitle}</p>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <div className="button">
            <p>Comprar</p>
          </div>
        </div>
      ))}
      <div className>
        <img className="icon-bottom-left-product" src={LeftIcon} alt="left-icon" />
        <img className="icon-bottom-right-product" src={RightIcon} alt="right-icon" />
      </div>
    </div>
  );
}

export default Products;
