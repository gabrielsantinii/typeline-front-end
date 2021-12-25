import { RecommendedAuthorModel } from "@/src/domain/models";
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
} from "./recommended-author-card-styles";

export function RecommendedAuthorCard(props: RecommendedAuthorModel) {
    return (
        <Container className="recommended-author-card">
            <Banner src={props.bannerUrl}>
                <Avatar src={props.avatarUrl} />
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
