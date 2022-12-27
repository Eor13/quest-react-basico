import Potato from '../image/potato.png'
import '../text/style.css'

const Text = ({children,theme, coloredText, colorBackground}) => {
  return (
    <div className='box-master'>

        <img src={Potato} className='iPotato' alt='Desenho de uma Batata'/>
        <div className="box" style={{backgroundColor: colorBackground}} >
          <h1 className='title'>{theme}</h1>
          <p style={{color: coloredText}}>{children.toUpperCase()}</p>
        </div>
    </div>
  );
};

export {Text};
