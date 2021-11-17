import styled from "styled-components";

export const Container = styled.div`
    margin:30px 0;
    cursor:pointer;
    

    a{
        display:flex;
        align-items:center;
        text-decoration:none;
        
    }

    @media(max-width:700px){
        width:100%;

        a{
            flex-direction:column;
            justify-content:center;
        }
    }
    @media(max-width:480px){
        width:50%;
    }
`

export const Info = styled.div`
    flex:1;
    margin-right:20px;

    @media(max-width:700px){
        text-align:center;
        margin:0;
    }
`

export const Title = styled.div`
    text-align:right;
    font-weight:bold;
    margin-bottom:5px;
    font-size:15px;
    color:#FFF;

    @media(max-width:700px){
        text-align:center;
    }
`

export const Description = styled.div`
    text-align:right;
    font-size:13px;
    color:#B8B8D4;

    @media(max-width:700px){
        text-align:center;
    }
`

export const IconArea = styled.div<{active: boolean}>`
    width:50px;
    height:50px;
    border-radius:50%;
    background-color: ${props=>props.active ? '#25cd89' : '#494a7c'};
    display:flex;
    justify-content:center;
    align-items:center;

    @media(max-width:700px){
        margin-top:10px;
    }
`

export const Point = styled.div<{active: boolean}>`
    width:6px;
    height:6px;
    border:3px solid #494a7c;
    border-radius:50%;
    margin-left:30px;
    margin-right:-6px;
    background-color: ${props=>props.active ? '#25cd89' : '#02044a'};

    @media(max-width:700px){
        margin:0;
        margin-top:10px;
    }
`