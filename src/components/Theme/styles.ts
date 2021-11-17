import styled from "styled-components";

export const Container = styled.div`
    background-color:#02044A;
    color:#FFF;
    min-height:100vh;

    @media(max-width:700px){
        padding-right:80px;
    }
`

export const Area = styled.div`
    margin:auto;
    max-width:980px;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    padding-bottom:30px;
`

export const Steps = styled.div`
    flex:1;
    display:flex;

    @media(max-width:700px){
        display:flex;
        flex-direction:column;
    }

`

export const Sidebar = styled.div`
    width:250px;
    border-right:1px solid #16195c;

    @media(max-width:700px){
        display:flex;
        width:100%;
        margin:0 30px;
        border:0;
        border-bottom:1px solid #16195c;
    }
    @media(max-width:480px){
        flex-wrap:wrap;
    }
`

export const Page = styled.div`
    flex:1;
    padding-left:40px;
    padding-top:40px;

    @media(max-width:700px) {
        width:100%;
        padding:40px;
    }
`