import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";

type BannerProps = HtmlHTMLAttributes<HTMLAllCollection> & {
    src?: string;
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 30%;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10px;
    padding-bottom: 10px;
    border: 1px solid ${({ theme }) => theme.colors.hoverHighlight};
`;

export const Banner = styled.div<BannerProps>`
    flex-shrink: 0;
    position: relative;
    width: 100%;
    height: 50px;
    max-height: 200px;
    background-color: ${({ theme }) => theme.colors.hoverHighlight};

    margin-bottom: calc(55px / 2);
    > .avatar-container {
        position: absolute;
        bottom: 0;
        left: 10px;
        transform: translate(0, 50%);
        height: 55px;
        width: 55px;
        border-width: 2px;
    }
`;

export const ProfileInfos = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 10px;
    padding-right: 10px;
`;

export const Title = styled.span`
    transition: 180ms all;
    color: ${(props) => props.theme.colors.secondaryText};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
`;

export const Subtitle = styled.span`
    font-size: 15px;
    color: ${(props) => props.theme.colors.tercearyText};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Description = styled.p`
    color: ${(props) => props.theme.colors.secondaryText};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
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
    padding-left: 10px;

    > span + span {
        margin-left: 5px;
    }
`;

export const CountDescription = styled.span`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.tercearyText};
`;

export const CountValue = styled.span`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.secondaryText};
`;
