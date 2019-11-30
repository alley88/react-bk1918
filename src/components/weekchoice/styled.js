import styled from "styled-components";

export const WeekListContainer = styled.div`
    padding:0 .4rem;
    .week_list_item{
        padding-top:.6rem;
        background:#fff;
        &>p{
            font-size: .24rem;
            color: #ff3939;
            margin-top: 10px;
        }
    }
    .list_item_map{
        div{
            padding:.4rem 0;
        }
        img{
            width:6.7rem;
            height:4.46rem;
        }
        p:nth-child(2){
            margin-top: 30px;
            font-size: .32rem;
            color: #2c3038;
        }
        p:nth-child(3){
            margin-top: 16px;
            font-size: .22rem;
            color: #92969c;
        }
    }
`