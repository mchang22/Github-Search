import React from "react";
import { Card, Icon } from "semantic-ui-react";
import "./Home.scss";

const Home = (props) => {
  const { githubUser } = props;
  let content = <h2> Search github user in the search bar</h2>;
  if (githubUser) {
    const extra = (
      <span>
        <Icon name="user" />
        {githubUser.followers} Followers
      </span>
    );

    content = (
      <Card
        image={githubUser.avatar_url}
        header={githubUser.login}
        description="Github User"
        extra={extra}
      />
    );
  }

  return <section className="app-home flex-center">{content}</section>;
};

export default Home;
