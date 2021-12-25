import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";

type BannerProps = HtmlHTMLAttributes<HTMLAllCollection> & {
    src?: string;
};

export const Banner = styled.div<BannerProps>`
    flex-shrink: 0;
    position: relative;
    width: 100%;
    height: 200px;
    max-height: 200px;
    background-color: ${({ theme }) => theme.colors.hoverHighlight};

    margin-bottom: calc(134px / 2);
    > .avatar-container {
        position: absolute;
        bottom: 0;
        left: 10px;
        transform: translate(0, 50%);
        height: 134px;
        width: 134px;
        border-width: 4px;
    }
`;

export const ProfileHeader = styled.div`
    margin-top: 10px;
    margin-left: 10px;
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.secondaryText};
`;

export const Subtitle = styled.span`
    color: ${({ theme }) => theme.colors.tercearyText};
`;

export const ProfileBody = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 35px;

    display: flex;
    flex-direction: column;
`;

export const ProfileDescription = styled.p`
    font-size: 15px;
    max-width: 80%;
    color: ${({ theme }) => theme.colors.secondaryText};
`;

export const CountSection = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;

    > .count-container + .count-container {
        margin-left: 15px;
    }
`;

export const CountContainer = styled.div`
    display: flex;
    align-items: center;

    > span + span {
        margin-left: 5px;
    }
`;

export const CountDescription = styled.span`
    color: ${({ theme }) => theme.colors.tercearyText};
`;

export const CountValue = styled.span`
    color: ${({ theme }) => theme.colors.secondaryText};
`;
