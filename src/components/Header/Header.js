import React from "react";
import { useHistory } from "react-router-dom";

import "./Header.scss";
import { Input, Menu } from "semantic-ui-react";

const Header = (props) => {
  const history = useHistory();
  const handleClick = (path) => history.push(path);
  const { userInput, setUserInput, fetchGithubUser } = props;

  const handleOnchange = (e) => {
    setUserInput(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchGithubUser();
    }
  };
  return (
    <Menu className="app-header" inverted>
      <Menu.Item name="home" onClick={() => handleClick("/home")} />
      <Menu.Item name="following" onClick={() => handleClick("/following")} />
      <Menu.Item name="repos" onClick={() => handleClick("/repos")} />
      <Menu.Menu position="left">
        <Menu.Item>
          <Input
            value={userInput}
            onChange={handleOnchange}
            icon="search"
            placeholder="Search Github User..."
            onKeyPress={handleKeyPress}
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
