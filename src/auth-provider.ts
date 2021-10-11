// 如果使用第三方 auth 服务, 不需要本文件

import {User} from "./screens/project-list/search-panel";

const localStorageKey = '__auth_provider_token__'
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUseResponse = ({user} : {user : User}) => {
  window.localStorage.setItem(localStorageKey, user.token || '')
  return user;
}

export const login = (param: {username: string, password: string}) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(param),
  }).then(async (response) => {
    if (response.ok) {
      return handleUseResponse(await response.json());
    }else{
      return Promise.reject(param)
    }
  });
}

export const register = (param: {username: string, password: string}) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(param),
  }).then(async (response) => {
    if (response.ok) {
      return handleUseResponse(await response.json());
    }else{
      return Promise.reject(param)
    }
  });
}

export const logout = async () => window.localStorage.removeItem(localStorageKey);
