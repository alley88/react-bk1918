import React, { Component } from 'react'
import Header from "components/header"
import { CateGoryContainer } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Category extends Component {
    render() {
        let { category } = this.props;
        return (
            <div>
                <Header title="首页" />
                <CateGoryContainer>
                    {
                        category.map((item, index) => (
                            <div className="food_type" key={index}>
                                <div>{item.name}</div>
                                <ul>
                                    {
                                        item.sub_category_list.map((child,idx)=>(
                                            <li key={child.id} onClick={this.handleTo.bind(this,child)}>{child.name}</li>
                                        ))
                                    }
                                    
                                </ul>
                            </div>
                        ))
                    }

                </CateGoryContainer>
            </div>
        )
    }
    handleTo(child){
        this.props.history.push("/foodType/"+(child.id+1)+"/"+this.props.cityId)
    }
    componentDidMount() {
        if (!localStorage.getItem('category')) {
            this.props.handleAsyncCateGory(this.props.cityId);
        }
    }
}

export default Category
