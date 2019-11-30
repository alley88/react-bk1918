import React, { Component } from 'react'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { WeekListContainer } from "./styled"
import BscrollCom from "common/bscroll"

@connect(mapStateToProps, mapDispatchToProps)
class Weekchoice extends Component {
    constructor(){
        super();

        this.page = 0;
    }
    render() {
        let { week_choice } = this.props;
        return (
            <BscrollCom ref="scroll">
            <WeekListContainer>
                {
                    week_choice.map((item, index) => (
                        <div className="week_list_item" key={index}>
                            <h1>{item.group_section.title}</h1>
                            <p>{item.group_section.desc}</p>
                            <div className="list_item_map">
                                {
                                    item.tabs.map((child) => (
                                        <div key={child.id}>
                                            <img src={child.url} />
                                            <p>{child.title}</p>
                                            <p>{child.desc}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </WeekListContainer>
            </BscrollCom>
        )
    }
    componentWillUpdate(){
        this.refs.scroll.handlefinishPullUp();
    }
    componentDidMount() {
        this.handleAsyncData();
        //上拉加载更多
        this.refs.scroll.handlepullingUp(()=>{
           this.handleAsyncData();
        })
    }
    handleAsyncData(){
        let {cityId} = this.props
        this.props.handleAsyncWeek(cityId,this.page);
        this.page++;
    }
}

export default Weekchoice;