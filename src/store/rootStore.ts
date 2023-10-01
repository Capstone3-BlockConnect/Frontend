import { atom } from "recoil";

export const rootStore = atom({
  key: "rootStore",
  default: {
    value: "suwon",
  },
});
