import './infocbd.css';
import Icon1 from '../../assets/logogota.png'; 
import Icon2 from '../../assets/hands.png';  
import Icon3 from '../../assets/arrows.png';  

import Crystal from '../../assets/crystal.png'

function InfoCBD() {
    return (
        <div className="infocbd__container">
            <div className="text__icons-container">
                <div className="text__icon">
                    <img src={Icon1}className="icon__CBD" />
                    <p className="text">El cannabidiol, o CBD, es uno de los <br/> compuestos de la planta Cannabis Sativa <br/> con mayores beneficios para tu piel y un <br/> gran aliado en la cosmética.</p>
                </div>
                <div className="text__icon">
                    <img src={Icon2}className="icon__CBD" />
                    <p className="text">El CBD está transformando la industria <br/> de la belleza y el bienestar, derribando <br/> todas las barreras sociales que <br/> despertaban el escepticismo.</p>
                </div>
                <div className="text__icon">
                    <img src={Icon3} className="icon__CBD" />
                    <p className="text">Otros de los grandes beneficios de este <br/> activo además de su poder hidratante y <br/> antioxidante son los de antiinflamatorio <br/> y calmante.</p>
                </div>
                <div className="button__CBD">
            <p>Saber más</p>
          </div>
            </div>
            <div className="image__container">
                <img src={Crystal} alt="Crystalweed" />
            </div>
        </div>
    )
}
export default InfoCBD;
