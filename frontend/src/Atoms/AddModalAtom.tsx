

import { atom } from "recoil";

export const addModalAtom = atom({
    key: "addModalState",
    default: false
})

export const userDataAtom = atom({
    key  : "userData",
    default : ""
})