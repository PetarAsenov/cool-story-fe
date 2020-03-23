import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage
} from "../appState/actions";

export const HOME_PAGES = "HOME_PAGES";

const loadHomePages = homePage => {
  return {
    type: HOME_PAGES,
    payload: homePage
  };
};

export function fetchHomepages() {
  return async function thunk(dispatch, getState) {
    const homePage = await axios.get(`${apiUrl}`);
    dispatch(loadHomePages(homePage.data.homepage));
  };
}
