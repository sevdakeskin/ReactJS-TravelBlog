import logo from "../images/logo.svg";
import "./styles/Header.css";

function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo} className="header-logo" alt="header-logo" />
                <h1 className="header_title">my travel journal.</h1>
            </div>

        </div>
    )

}
export default Header;