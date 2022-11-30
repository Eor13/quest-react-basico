import Potato from '../image/potato.png'
import '../components/text.css'

const Text = ({theme, colorText, colorBackground}) => {
  return (
    <div className='box-master'>
        <img src={Potato} className='iPotato' alt='Desenho de uma Batata'/>
        <div className="box" style={{backgroundColor: colorBackground, color: colorText, textTransform: "uppercase"}} >
        <h1>{theme}</h1>
        <p>{theme} quando nasce, esparrama pelo chão. </p>
        <p>Expressão original: {theme} quando nasce, espalha rama pelo chão.</p>
        </div>
    </div>
  );
};

Text.defaultProps ={
    colorBackground:'#A3642E',
    colorText: '#94EDFF'
}

export default Text;
