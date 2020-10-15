import React, { useRef, useState } from "react";
import { Card, Feed, Button } from "semantic-ui-react";
import "./Following.scss";

const Following = (props) => {
  const [displayList, setDisplayList] = useState([]);
  const { userFollowingList } = props;

  let total = userFollowingList.length;
  const displayListSizeRef = useRef(10);

  let content = <h2>No following</h2>;

  const loadmore = () => {
    displayListSizeRef.current += 10;
    if (displayListSizeRef.current > total) {
      displayListSizeRef.current = total;
    }
    setDisplayList(userFollowingList.slice(0, displayListSizeRef.current));
  };

  if (userFollowingList.length > 0) {
    if (displayList.length === 0) {
      if (displayListSizeRef.current > total) {
        displayListSizeRef.current = total;
      }
      setDisplayList(userFollowingList.slice(0, displayListSizeRef.current));
    }
    content = (
      <Card>
        <Card.Content>
          <Card.Header>
            {userFollowingList.length} Following
            <Button onClick={loadmore} className="btn-load-more" basic>
              Load more
            </Button>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            {displayList.map((user, index) => (
              <Feed.Event key={user.id}>
                <Feed.Label image={user.avatar_url} />
                <Feed.Content>
                  <Feed.Date content={`index: ${index + 1}`} />
                  <Feed.Summary>{user.login}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            ))}
          </Feed>
        </Card.Content>
      </Card>
    );
  }

  return <section className="app-following flex-center">{content}</section>;
};

export default Following;
