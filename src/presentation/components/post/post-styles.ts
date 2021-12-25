import styled, { css } from "styled-components";
import { HandThumbsUp, Share, ChatLeft } from "@styled-icons/bootstrap";

export const Container = styled.div`
    display: flex;
    overflow-x: hidden;
    flex-shrink: 0;
    min-width: 100%;
    text-overflow: ellipsis;

    > .avatar-container {
        margin-right: 10px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
`;

export const ProfileName = styled.h3`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.secondaryText};
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const ProfileUsername = styled.span`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.tercearyText};
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 5px;
`;

export const PostDate = styled.span`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.tercearyText};
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const ContentBody = styled.p`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    font-size: 18px;
    color: ${({ theme }) => theme.colors.secondaryText};
`;

export const ContentFooter = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    min-width: 30%;
    padding-right: 30%;

    > svg + svg {
        margin-left: 20px;
    }
`;

const iconsCSS = css`
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.hoverPrimaryText};
    cursor: pointer;
    transition: 180ms all;
`;

export const CommentIcon = styled(ChatLeft)`
    ${iconsCSS}
    &:hover {
        fill: ${({ theme }) => theme.colors.secondaryText};
    }
`;

export const LikeIcon = styled(HandThumbsUp)`
    ${iconsCSS}
    &:hover {
        fill: ${({ theme }) => theme.colors.highlight};
    }
`;

export const ShareIcon = styled(Share)`
    ${iconsCSS}
    &:hover {
        fill: ${({ theme }) => theme.colors.secondaryText};
    }
`;
