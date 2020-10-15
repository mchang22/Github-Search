import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Following from "./components/Following/Following";
import Repos from "./components/Repos/Repos";
import {
  getGithubUserInfo,
  getUserFollowing,
  getUserRepos,
} from "./apis/githubAPI";
import "./App.scss";

function App() {
  const [userInput, setUserInput] = useState("");
  const [githubUser, setGithubUser] = useState(null);
  const [userFollowingList, setUserFollowingList] = useState([]);
  const [userRepos, setUserRepos] = useState([]);
  const [error, setError] = useState(null);

  const fetchGithubUser = () => {
    let userName = userInput;
    getGithubUserInfo(userName)
      .then((response) => {
        const gitUserInfo = response.data;
        console.log(gitUserInfo);
        if (gitUserInfo) {
          setGithubUser(gitUserInfo);
          Promise.all([getUserFollowing(userName), getUserRepos(userName)])
            .then((res) => {
              const userFollowingListData = res[0].data;
              setUserFollowingList(userFollowingListData);
              const userReposData = res[1].data;
              setUserRepos(userReposData);
              console.log(userReposData);
              setError(null);
            })
            .catch((err) => {
              setError(err);
              setGithubUser(null);
              setUserFollowingList(null);
              setUserRepos(null);
            });
        }
      })
      .catch((err) => {
        setError(err);
        setGithubUser(null);
        setUserFollowingList(null);
        setUserRepos(null);
      });
  };

  return (
    <div className="app__container">
      <Header
        userInput={userInput}
        setUserInput={setUserInput}
        fetchGithubUser={fetchGithubUser}
      ></Header>
      <main className="app__content">
        {error ? (
          <h2 className="app-error flex-center">{error.message}</h2>
        ) : null}
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home">
            <Home githubUser={githubUser} />
          </Route>
          <Route path="/following">
            <Following userFollowingList={userFollowingList} />
          </Route>
          <Route path="/repos">
            <Repos githubUser={githubUser} repos={userRepos} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
