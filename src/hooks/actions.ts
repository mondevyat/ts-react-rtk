import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"
import { gitActions } from "../store/git/git.slice";

const actions = {
    ...gitActions
}

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}