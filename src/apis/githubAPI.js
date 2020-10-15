import axios from "axios";

const baseUrl = "https://api.github.com";
const userPath = "users";
const followingPath = "following";
const repoPath = "repos";

const headers = {
  Accept: "application/vnd.github.v3+json",
};

export const getGithubUserInfo = (userName) => {
  const endPoint = [baseUrl, userPath, userName].join("/");
  return axios(endPoint, { headers });
};

export const getUserFollowing = (userName) => {
  const endPoint = [baseUrl, userPath, userName, followingPath].join("/");
  return axios(endPoint, { headers });
};
export const getUserRepos = (userName) => {
  const endPoint = [baseUrl, userPath, userName, repoPath].join("/");
  return axios(endPoint, { headers });
};
