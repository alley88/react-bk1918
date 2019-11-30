import React, { Component } from 'react'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { WeekListContainer } from "./styled"
import BscrollCom from "common/bscroll"

@connect(mapStateToProps, mapDispatchToProps)
class Weekchoice extends Component {
    render() {
        let { week_choice } = this.props;
        return (
            <BscrollCom>
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
    componentDidMount() {

        this.props.handleAsyncWeek();
    }
}

export default Weekchoice;