import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("clicked");
  };
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button text="Add" onClick={onClick} />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

//CSS Variables for inline
// const headerStyle = {
//   color: "#ff0000",
//   background: "black",
// };

export default Header;
