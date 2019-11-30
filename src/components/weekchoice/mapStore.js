import {weekAsyncAction} from "actions/week/actionCreator"
export const mapStateToProps = (state)=>({
    week_choice:state.home.week_choice,
    cityId:state.user.cityId
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncWeek(cityId,page){
       
        dispatch(weekAsyncAction(cityId,page))
    }
})