import styled from "styled-components";

export const Container = styled.div`
    font-size: 18px;
    p{
        font-size:13px;
        color:#b8b8b4;
    }
    h2 {
        font-size:15px;
        span{
        color:#FFF;
        font-size:15px;
    }
}
    h1{
        margin:0;
        padding:0;
        font-size:26px;
        color:#25cd89;
    }
    hr{
        height:1px;
        border:0;
        background-color:#16195c;
    }
    label{
        font-size:13px;

        input{
            display:block;
            margin-top:7px;
            box-sizing:border-box;
            width:100%;
            padding:20px 10px;
            border:2px solid #25cd89;
            border-radius:10px;
            color:#FFF;
            outline:0;
            font-size:15px;
            background-color:#02044a;
        }
    }
    button{
        background-color:#25cd89;
        color:#FFF;
        font-size:14px;
        font-weight:bold;
        padding:20px 40px;
        border:0;
        border-radius:30px;
        cursor:pointer;
        margin-top:30px;
    }
`