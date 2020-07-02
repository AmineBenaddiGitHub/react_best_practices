import { updateLastname } from "../nameReducer";
import { updateLoader } from "../nameReducer";

import { AppDispatch } from '../../../App';
import { AppThunk } from "../../index";

export const updateLastnameThunk = (idUser: number): AppThunk =>
    async (dispatch: AppDispatch) => {
    dispatch(updateLoader(true));
    try{
        const res = await fetch(`https://reqres.in/api/users/${idUser}`, {cache: "no-cache"});
        if(res.status === 200) {
            const val = await res.json();
            dispatch(updateLastname(val.data.last_name));
            dispatch(updateLoader(false));
        } else {
            dispatch(updateLastname('ERROR_DEFAULT'));
            dispatch(updateLoader(false));
        }
    } catch(e) {
        dispatch(updateLastname('CATCH_DEFAULT'));
        dispatch(updateLoader(false));
    }
};
