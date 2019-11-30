import React, { Component } from 'react'
import Bscroll from "better-scroll";
import {Bswrapper} from "./styled"
export default class BscrollCom extends Component {
    render() {
        return (
            <Bswrapper ref="wrapper">
               {this.props.children}
            </Bswrapper>
        )
    }
    componentDidMount(){
        this.scroll = new Bscroll(this.refs.wrapper,{
            pullUpLoad:true
        })
    }
    handlepullingUp(callback){
        this.scroll.on("pullingUp",()=>{
            callback()
        })
    }
    handlefinishPullUp(){
        this.scroll.finishPullUp();
        this.scroll.refresh();
    }
}
