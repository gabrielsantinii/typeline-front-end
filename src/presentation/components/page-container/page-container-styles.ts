import styled from "styled-components";
import { ArrowLeft } from "@styled-icons/bootstrap";

export const BodyContainer = styled.div`
    display: flex;

    width: 100%;
    height: 100vh;
    padding-top: 70px;
    position: relative;
    overflow-y: scroll;
`;

export const SidebarContainer = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        flex: 0 0 100px;
    }

    @media (min-width: 1024px) {
        flex: 0 0 250px;
    }
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    padding-left: 10px;
    margin-top: 150px;
    max-width: 100%;
    padding-right: 20px;
    overflow-y: scroll;

    @media (min-width: 768px) {
        padding-right: 0px;
        max-width: 80%;
        padding-left: 50px;
    }

    @media (min-width: 1024px) {
        max-width: 66%;
       
    }
`;

export const PageTitleContainer = styled.div`
    position: fixed;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    opacity: 0.94;
    height: 130px;
    top: 70px;
    display: flex;
    width: 100%;
    padding-bottom: 20px;
`;

export const PageTitle = styled.h1`
    margin-top: auto;
    color: ${({ theme }) => theme.colors.secondaryText};
`;

export const BackIcon = styled(ArrowLeft)`
    margin-top: auto;
    margin-right: 10px;
    transition: 180ms all;
    cursor: pointer;
    height: 50%;
    width: 30px;
    fill: ${({ theme }) => theme.colors.secondaryText};

    &:hover {
        fill: ${({ theme }) => theme.colors.highlight};
    }
`;
