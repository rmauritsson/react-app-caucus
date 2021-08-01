import HomeIcon from "@material-ui/icons/Home";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = () => {
  return (
    <div className="app_header">
      <div className="menuButton">
        <HomeIcon />
      </div>
      <div className="menuContent">
        <HomeWorkIcon />
        <p>Logo</p>
        <AccountCircleIcon />
      </div>
    </div>
  );
};
export default Header;
