import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    > section + section {
        margin-top: 35px;
    }
`;

export const SearchSection = styled.div`
    margin-left: auto;
    min-width: 100%;
    max-width: 100%;

    margin-bottom: 35px;

    @media (min-width: 1024px) {
        margin-bottom: 0;
        min-width: 40%;
        max-width: 40%;
    }
`;
