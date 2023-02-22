import { recoilPersist } from "recoil-persist";
import {
  DibsContentStateType,
  TrendingContentType,
  UserDataType,
} from "./Types";
import { atom } from "recoil";

const { persistAtom } = recoilPersist();

export const isLoginState = atom<boolean>({
  key: "isLoginState",
  default: false,
});

export const userDataState = atom<UserDataType>({
  key: "userDataState",
  default: {
    uid: "",
    email: "",
    displayName: "",
  },
});

export const trendingMovieDataState = atom<TrendingContentType[]>({
  key: "trendingMovieDataState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const dibsContentState = atom<DibsContentStateType>({
  key: "dibsContentState",
  default: {
    isPending: false,
    success: false,
    error: null,
  },
});
