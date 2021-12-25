import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    cursor: pointer;
    &:hover {
        > .profile-infos {
            > .title {
                color: ${(props) => props.theme.colors.highlight};
            }
        }
    }
`;
export const AvatarContainer = styled.div``;

export const ProfileInfos = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Title = styled.span`
    transition: 180ms all;
    color: ${(props) => props.theme.colors.secondaryText};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
`;

export const Subtitle = styled.span`
    color: ${(props) => props.theme.colors.tercearyText};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
