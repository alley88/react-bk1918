import styled from "styled-components";

export const HeaderContainer = styled.div`
    padding:0 .2rem;
    width:100%;
    height:.88rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#000;
    color: #fff;
    font-size:.3rem;
    position:relative;
    z-index:2;
    .header_c{
        position:absolute;
        left:50%;
        margin-left:-68px;
        width:136px;
        height:56px;
    }
    .header_r{
        display:flex;
        justify-content:space-between;
        i{
            font-size:.4rem;
            font-weight:900;
            margin-left:.5rem;
        }
    }
`