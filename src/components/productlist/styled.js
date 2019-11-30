import styled from "styled-components";

export const ProductlistContainer = styled.div`
     &>div{
        width:100%;
        height:2.9rem;
        display:flex;
        padding:.3rem;
        border-bottom:1px solid #ccc;
     }
    .food_pic{
        width:3.45rem;
        height:2.3rem;
        flex-shrink:0;
        margin-right:.2rem;
        img{
            width:100%;
            height:100%
        }
    }
    .food_desc{
        font-size:.3rem;
        div:nth-child(1){
            height:1.2rem;
        }
        div:nth-child(2){
            color:#ff3939
        }
    }
`