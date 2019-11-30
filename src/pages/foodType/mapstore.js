import {producListAsyncAction} from "actions/week/actionCreator"

export const mapStateToProps = (state)=>({
    productList:state.home.productList
})
export const mapDispatchToProps = (dispatch)=>({
    handleproductList(id,sort,cityId,page){
        dispatch(producListAsyncAction(id,sort,cityId,page))
    }
})