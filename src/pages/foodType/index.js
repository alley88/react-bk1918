import React, { Component,Fragment} from 'react'
import Header from "components/header"
import Productlist from "components/productlist"
import {FoodTypeNav} from "./styled"
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapstore"
import {withRouter} from "react-router-dom"

@withRouter
@connect(mapStateToProps,mapDispatchToProps)
 class FoodType extends Component {
    constructor(){
        super()
        this.state = {
            navTitle:"智能排序",
            navList:[
                {
                    text:"智能排序",
                    id:1
                },
                {
                    text:"离我最近",
                    id:3
                },
                {
                    text:"价格最高",
                    id:2
                },
                {
                    text:"价格最低",
                    id:4
                }
            ],
            isShow:false,
            sort:1,
            page:0
        }
    }
    render() {
        let {navTitle,navList,isShow} = this.state;
        let {productList} = this.props;
      
        return (
            <Fragment>
                <Header title="首页"/>
                <FoodTypeNav isShow={isShow}>
                    <div>全部</div>
                    <div onClick={this.handleToggle.bind(this)}>{navTitle}</div>
                    <ul>
                        {
                            navList.map((item,index)=>(
                                <li key={index} onClick={this.handleSwitchFood.bind(this,item)}>{item.text}</li>
                            ))
                        }
                    </ul>
                </FoodTypeNav>
                <Productlist productList={productList}/>
            </Fragment>
        )
    }
    handleSwitchFood(item){
        this.setState({
            isShow:false,
            navTitle:item.text,
            sort:item.id
        },()=>{
            this.handleAsyncList();
        })
       
    }
    handleToggle(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    componentDidMount(){
            this.handleAsyncList();
    }
    handleAsyncList(){
        let {id,cityId} = this.props.match.params;
        let {page,sort} = this.state;

        this.props.handleproductList(id,sort,cityId,page);
    }
}
export default FoodType;