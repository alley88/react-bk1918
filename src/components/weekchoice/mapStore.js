import {weekAsyncAction} from "actions/week/actionCreator"
export const mapStateToProps = (state)=>({
    week_choice:state.home.week_choice
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncWeek(){
       
        dispatch(weekAsyncAction())
    }
})