import {handleActions} from "redux-actions";
import {weekAsyncType,categoryType,ProductList} from "actions/week/actionsTypes"

const defaultState = {
    week_choice:[],
    category:[],
    productList:[]
}


export default handleActions({
    [weekAsyncType]:(state,action)=>{
        let weekState = JSON.parse(JSON.stringify(state));
        weekState.week_choice = [...weekState.week_choice,...action.payload.data];
        return weekState
    },
    [categoryType]:(state,action)=>{
        let categoryState = JSON.parse(JSON.stringify(state));
        categoryState.category = action.payload;
        return categoryState;
    },
    [ProductList]:(state,action)=>{
        let proState = JSON.parse(JSON.stringify(state));
        proState.productList = action.payload;
        return proState;
    }

},defaultState)





