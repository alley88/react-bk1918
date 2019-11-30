import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import Header from "components/header"
import Weekchoice from "components/weekchoice"
export default class Home extends Component {
    render() {
        return (
            <PageContainer>
                <Header title="分类"/>
                <Weekchoice/>
            </PageContainer>
        )
    }
}
