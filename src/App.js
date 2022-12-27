import {Text} from './components/text';
import {Button} from './components/button';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Button label={"CV Batatinha"}/>
      <Text theme="batatinha">
        batatinha quando nasce, esparrama pelo chão.
        expressão original: batatinha quando nasce, espalha rama pelo chão.
      </Text>
    </div>
  );
}
Text.defaultProps ={
  colorBackground:'#A3642E',
  coloredText: '#94EDFF'
}

Button.defaultProps = {
  colorBackground:'#A3642E',
  coloredText: '#94EDFF'
}

export default App;
