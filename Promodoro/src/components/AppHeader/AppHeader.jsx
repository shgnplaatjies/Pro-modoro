import "./AppHeader.css";
import Logo from "../Logo/Logo.jsx";
import NavMenu from "../NavMenu/NavMenu.jsx";

/**
 * Renders the app AppHeader
 */
function AppHeader() {
  return (
    <header className="app-header-widget">
      <Logo />
      <NavMenu />
    </header>
  );
}

export default AppHeader;
