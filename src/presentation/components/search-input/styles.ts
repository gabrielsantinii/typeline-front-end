import styled from "styled-components";
import { Search } from "@styled-icons/bootstrap";

export const SearchInputContainer = styled.div`
    display: flex;
    max-width: 100%;
    overflow: visible;
    position: relative;
    height: 46px;

    > input {
        background: ${({ theme }) => theme.colors.hoverPrimaryText};
        font-size: 15px;
        color: ${({ theme }) => theme.colors.secondaryText};
        width: 100%;
        border-radius: 10px;

        padding-left: 50px;
        padding-right: 15px;

        min-width: none;
        overflow: hidden;
        border: 1px solid ${({ theme }) => theme.colors.secondaryText};
        

        &::placeholder {
            color: ${({ theme }) => theme.colors.secondaryText};
        }

        &:focus {
            border-color: ${({ theme }) => theme.colors.highlight};
            & svg {
                fill: ${({ theme }) => theme.colors.highlight};
            }
        }
    }
`;

export const SearchIcon = styled(Search)`
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.secondaryText};

    position: absolute;
    left: 0;
    margin-left: 20px;
    top: 50%;
    background-color: transparent;
    transform: translate(0, -45%);
`;
