import styled from "styled-components";


export const FoodTypeNav = styled.div`
    width:100%;
    height:.79rem;
    background:#fff;
    display:flex;
    justify-content:space-between;
    position:relative;
    border-bottom:1px solid #ccc;
    z-index:10;
    div{
        width:100%;
        text-align:center;
        line-height:.79rem;
    }
    div:nth-child(1){
        border-right:1px solid #ccc;
    }
    ul{
        display:${props=>props.isShow?'block':'none'};
        position:absolute;
        left:0;
        top:.79rem;
        width:100%;
        background:#fff;
        li{
            width:100%;
            height:.8rem;
            text-align:center;
            line-height:.8rem;
            border-top:1px solid #ccc;
        }
    }
`