import {weekAsyncType,categoryType,ProductList} from "./actionsTypes";
import {createAction} from "redux-actions";
import {week_choiceApi,categoryApi,ProductApi} from "api/hub"
export const weekAsyncAction = (cityId,page)=>{
    let weekAction = createAction(weekAsyncType,(data)=>({data:data}));
    
    return async (dispatch)=>{
        let data = await week_choiceApi(cityId,page);
        dispatch(weekAction(data))
    }
}

export const categoryAsyncAction = (cityId)=>{
    let categoryAction = createAction(categoryType,data=>data)

    return async (dispatch)=>{
        let data = await categoryApi(cityId);
        localStorage.setItem("category",JSON.stringify(data));
        dispatch(categoryAction(data));
    }
}

export const producListAsyncAction = (id,sort,cityId,page)=>{
    let produclistAction = createAction(ProductList,data=>data)

    return async  (dispatch)=>{
        let data = await ProductApi(id,sort,cityId,page);
        dispatch(produclistAction(data))
    }
}