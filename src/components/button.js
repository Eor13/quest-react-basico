import './button.css'

const comandClick = (label) =>{
    alert(`A label desse botão é ${label}`)
}

function Button({ label, colorBackground, colorText }) {
    return <button className='btn' style={{ backgroundColor: colorBackground, color: colorText }} onClick={() =>comandClick(label)}>{label}</button>;
}
Button.defaultProps = {
    label: 'CV da Batatinha',
    colorBackground:'#A3642E',
    colorText: '#94EDFF'
}
export default Button;