import { HtmlHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type AvatarProps = HtmlHTMLAttributes<HTMLAllCollection> & {
    src?: string;
};

function pickupRandomColor(): string {
    return ["blue", "red", "green"][Math.floor(Math.random() * 3)];
}

export const AvatarContainer = styled.div<AvatarProps>`
    display: flex;

    flex-shrink: 0;
    width: 35px;
    height: 35px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.hoverPrimaryText};
    border: 2px solid ${({ theme }) => theme.colors.hoverHighlight};

    ${(props) =>
        props.src &&
        css`
            background-image: url(${props.src});
            background-position: center;
            background-size: cover;
        `}
`;