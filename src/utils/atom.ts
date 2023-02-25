import { UserDataType } from "./Types";
import { atom } from "recoil";

export const isLoginState = atom({
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

export const loadingState = atom({
  key: "loadingState",
  default: false,
});

export const attachmentState = atom<string | null>({
  key: "attachmentState",
  default: null,
});
