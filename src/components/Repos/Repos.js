import React from "react";

const Repos = (props) => {
  const { githubUser, repos } = props;
  let content = <h2> Search github user in the search bar</h2>;

  if (githubUser && repos) {
    console.log(githubUser);
    const userName = githubUser.login;
    const followersNum = githubUser.followers;
    const followingNum = githubUser.following;
    let curRepo = repos.length > 0 ? repos[0] : null;

    if (curRepo) {
      const repoName = curRepo.name;
      const isPrivate = curRepo.private ? "private" : "not private";
      content = (
        <h2>
          {`User The ${userName} with ${followersNum} followers is following ${followingNum}. One repo for
              this user is ${repoName} and it is ${isPrivate}`}
        </h2>
      );
    } else {
      content = (
        <h2>
          {`User The ${userName} with ${followersNum} followers is following ${followingNum}. No repo for
            this user`}
        </h2>
      );
    }
  }
  return <section className="app-repos flex-center">{content}</section>;
};

export default Repos;
