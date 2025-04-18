import './Button.css'

export default function Button({ children, onMyClick, isActive }) {

    return <button className={isActive ? "button active" : "button"} onClick={onMyClick}>{children}</button>

}