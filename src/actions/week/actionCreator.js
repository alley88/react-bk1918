import {weekAsyncType} from "./actionsTypes";
import {createAction} from "redux-actions";
import {week_choiceApi} from "api/hub"
export const weekAsyncAction = (cityId,page)=>{
    let weekAction = createAction(weekAsyncType,(data)=>({data:data}));
    
    return async (dispatch)=>{
        let data = await week_choiceApi(140,0);
        dispatch(weekAction(data))
    }
}