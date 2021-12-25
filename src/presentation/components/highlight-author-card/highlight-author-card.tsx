import { Avatar } from "@/src/presentation/components";
import {
    Container,
    Banner,
    ProfileInfos,
    Subtitle,
    Title,
    Description,
    CountSection,
    CountContainer,
    CountValue,
    CountDescription,
} from "./highlight-author-card-styles";

type Props = {
    name: string;
    username: string;
    description: string;
    followersCount: number;
    likesCount: number;
    avatarUrl: string;
    bannerUrl: string;
};

export function HighlightAuthorCard(props: Props) {
    return (
        <Container className="highlight-author-card">
            <Banner>
                <Avatar />
            </Banner>

            <ProfileInfos className="profile-infos">
                <Title className="title">{props.name}</Title>
                <Subtitle>@{props.username}</Subtitle>
                <Description>{props.description}</Description>
            </ProfileInfos>
            <CountSection>
                <CountContainer className="count-container">
                    <CountValue>{props.likesCount}</CountValue>
                    <CountDescription>Likes</CountDescription>
                </CountContainer>
                <CountContainer className="count-container">
                    <CountValue>{props.followersCount}</CountValue>
                    <CountDescription>Seguidores</CountDescription>
                </CountContainer>
            </CountSection>
        </Container>
    );
}
