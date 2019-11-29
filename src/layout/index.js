import React, { Component,Fragment} from 'react'
import TabBar from "components/tabBar"
export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                {this.props.children}
                {/* 内容区 */}
                <TabBar path={this.props.path}/>
            </Fragment>
        )
    }
}

/*
    组件标签内部嵌套的内容如何显示
    this.props.children

*/
