import "./Header.css";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

function Header(props) {
  const { theme, SetTheme } = props;
  function ToggleTheme() {
    if (theme === "light") {
      SetTheme("dark");
    } else {
      SetTheme("light");
    }
  }
  return (
    <header>
      <div className="logo">
        <span>ระบบจัดการข้อมูล</span>{" "}
      </div>
      <div className="theme-container">
        <span>{theme === "light" ? "โหมดกลางคืน" : "โหมดกลางวัน"}</span>
        <span className="icon" onClick={ToggleTheme}>
          {theme === "light" ? <FaMoon /> : <MdSunny />}
        </span>
      </div>
    </header>
  );
}
export default Header;
