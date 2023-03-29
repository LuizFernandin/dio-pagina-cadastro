import styled from "styled-components";

export const InputContainer = styled.div`
    border-bottom: 1px solid #3B3450;
    padding-bottom: 10px;

    img {
        margin-right: 8px;
    }

    input {
        background: transparent;
        border: 0;
        font-size: 18px;
        color: #FFFFFF;
    }

    input::placeholder {
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
    }

    input:focus{
        outline: none;
    }
`