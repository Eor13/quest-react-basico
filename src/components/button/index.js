import '../button/style.css'

const Button = ({ label, colorBackground, coloredText})  => <button className='btn' style={{ backgroundColor: colorBackground, color: coloredText }} onClick={()=> alert(`A label desse botão é o ${label}`)}>  {label}</button>;

export {Button};