import React, { Component } from 'react'
import { ProductlistContainer } from "./styled"
import Bscroll from "common/bscroll"
export default class Productlist extends Component {
    render() {
        let { productList } = this.props;
        return (
            <Bscroll>
            <ProductlistContainer>
                {
                    productList.map((item,index) => (
                        <div key={index}>
                            <div className="food_pic">
                                <img src={item.product_image} />
                            </div>
                            <div className="food_desc">
                                <div>{item.short_name}</div>
                                <div>{item.price/100}/{item.show_entity_name}</div>
                            </div>
                        </div>
                    ))
                }
            </ProductlistContainer>
            </Bscroll>
        )
    }
}
