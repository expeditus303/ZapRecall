import logo from "../assets/img/logo.png"

export default function Logo() {
    return (
        <div className="logo-container">
            <img src={logo} alt="" />
            <h1>ZapRecall</h1>
        </div>
    )
}