import "./NavMenu.css";
import SettingsImage from "../../assets/componentized/SettingsImage/SettingsImage.jsx";
import ProfileImage from "../../assets/componentized/ProfileImage/ProfileImage.jsx";

/**
 * Renders the navigation menu
 *
 * @param {object} props properties
 * @param {string} props.mode NavMenu mode to render
 */
function NavMenu() {
  return (
    <nav className="nav-menu-widget">
      <button type="button" className="settings-button">
        <SettingsImage />
      </button>
      <button type="button" className="profile-button">
        <ProfileImage />
      </button>
    </nav>
  );
}

export default NavMenu;
