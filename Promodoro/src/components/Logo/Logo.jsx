import "./Logo.css";
import logoImage from "../../assets/static/logo.png";

/**
 * Renders the app Logo
 */
function Logo() {
  return (
    <div className="logo-widget">
      <img src={logoImage} alt="Logo" />
      <h1 className="logo-text">Pro-Modoro</h1>
    </div>
  );
}

export default Logo;
