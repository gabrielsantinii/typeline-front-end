import styled, { css } from "styled-components";
import { CodeSlash, Search, ArrowDown } from "@styled-icons/bootstrap";

export const Container = styled.div`
    position: fixed;
    top: 120px;
    left: 0;
    bottom: 0;

    padding-bottom: 26px;

    height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    width: 100px;

    @media (min-width: 1024px) {
        width: 250px;
    }
`;

export const MenuContainer = styled.div`
    padding-bottom: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-bottom: 1px solid ${(props) => props.theme.colors.tercearyText};

    @media (min-width: 1024px) {
        padding-left: 10px;
        align-items: flex-start;
    }
`;
export const MenuOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    margin-top: 10px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: transparent;
    transition: 180ms all;

    &:hover {
        background: ${(props) => props.theme.colors.hoverHighlight};
    }

    > h3 {
        display: none;
    }
    &.active {
        background: ${(props) => props.theme.colors.hoverHighlight};

        > h3,
        svg {
            fill: ${(props) => props.theme.colors.highlight};
            color: ${(props) => props.theme.colors.highlight};
        }
    }

    @media (min-width: 1024px) {
        height: auto;
        width: 100%;
        border-radius: 40px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 20px;
        justify-content: flex-start;
        > h3 {
            display: flex;
            margin-left: 15px;
            color: ${(props) => props.theme.colors.secondaryText};
        }
    }
`;

const IconStyle = css`
    height: 25px;
    width: 25px;

    fill: ${(props) => props.theme.colors.secondaryText};

    transition: 180ms all;
`;
export const HomeIcon = styled(CodeSlash)`
    ${IconStyle}
`;
export const SearchIcon = styled(Search)`
    ${IconStyle}
`;

export const MainAuthorsContainer = styled.div`
    width: 100%;
    overflow-y: scroll;
    max-height: 50%;
    position: relative;
    padding: 0;
    @media (min-width: 1024px) {
        padding: 20px 0px 20px 20px;
    }
`;
export const MainAuthorsHeader = styled.span`
    display: none;

    @media (min-width: 1024px) {
        display: flex;
        font: 400 16px "Poppins", sans-serif;
        line-height: 22px;

        color: ${(props) => props.theme.colors.secondaryText};
    }
`;
export const MainAuthorsContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .author-card {
        margin-top: 10px;
        padding: 0;
        > .profile-infos {
            display: none;
        }
    }

    @media (min-width: 1024px) {
        align-items: flex-start;
        > .author-card {
            margin-top: 20px;
            > .profile-infos {
                display: flex;
            }
        }
    }
`;

export const LogoutContainer = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    align-items: center;
    justify-content: flex-end;

    > .avatar-container {
        width: 55px;
        height: 55px;
    }
`;
export const LogoutIcon = styled(ArrowDown)`
    ${IconStyle}
    margin-top: 10px;
    cursor: pointer;
    height: 30px;
    width: 30px;

    &:hover {
        fill: ${({ theme }) => theme.colors.highlight};
    }
`;
