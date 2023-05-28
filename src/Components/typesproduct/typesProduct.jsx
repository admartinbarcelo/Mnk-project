/* eslint-disable react/jsx-key */
import './typesproduct.css';
import Model1 from '../../assets/model1.png';
import Model2 from '../../assets/model2.png';
import Model3 from '../../assets/model3.png';
import Model4 from '../../assets/model4.png';
import Model5 from '../../assets/model5.png';

function TypesProduct() {
    const models = [
        { image: Model1, title: ['Limpiadores',<br />,' y tónicos'] },
        { image: Model2, title: ['Cremas', <br />, 'hidratantes'] },
        { image: Model3, title: [<br />,'Sérums', <br />]},
        { image: Model4, title: [<br />,'Protección solar', <br />]},
        { image: Model5, title: ['Cremas', <br />, 'antiedad'] },
    ];

    return(
        <div className="types__product">
            {models.map((model, index) => (
                <div key={index} className="product__item">
                    <h3 className="product__title">{model.title}</h3>
                    <img src={model.image} alt={model.title} className="product__image" />
                </div>
            ))}
        </div>
    )
}

export default TypesProduct;

