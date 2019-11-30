import {categoryAsyncAction} from "actions/week/actionCreator"
export const mapStateToProps = (state)=>({
    cityId:state.user.cityId,
    category:JSON.parse(localStorage.getItem("category")) || state.home.category
})

export const mapDispatchToProps = (dispatch)=>({
    handleAsyncCateGory(cityId){
        dispatch(categoryAsyncAction(cityId))
    }
})