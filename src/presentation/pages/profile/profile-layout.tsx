import { ProfileModel } from "@/src/domain/models";
import { PageContainer, Section, SectionHeader, Avatar, PostsWrapper, Post } from "@/src/presentation/components";
import {
    Banner,
    CountContainer,
    CountDescription,
    CountSection,
    CountValue,
    ProfileBody,
    ProfileDescription,
    ProfileHeader,
    Subtitle,
    Title,
} from "./profile-layout-styles";

export const ProfileLayout: React.FC<ProfileModel> = (props) => {
    return (
        <PageContainer title="Perfil">
            <Banner src={props.backgroundUrl}>
                <Avatar src={props.avatarUrl} />
            </Banner>
            <ProfileHeader>
                <Title>{props.name}</Title>
                <Subtitle>@{props.username}</Subtitle>
            </ProfileHeader>
            <ProfileBody>
                <ProfileDescription>{props.description}</ProfileDescription>
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
            </ProfileBody>
            <Section>
                <SectionHeader>Posts</SectionHeader>
                <PostsWrapper>
                    <Post
                        liked={false}
                        name="Gabriel Santini"
                        postedAt={new Date()}
                        username="gabrielsantini"
                        contentDescription="sadasd"
                    />
                    <Post
                        liked={false}
                        name="Gabriel Santini"
                        postedAt={new Date()}
                        username="gabrielsantini"
                        contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et dolor. Cum sociis natoque penatibus et just  euismod. Lorem ipsum dolor sit amet"
                    />
                    <Post
                        liked={false}
                        name="Gabriel Santini"
                        postedAt={new Date()}
                        username="gabrielsantini"
                        contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et dolor. Cum sociis natoque penatibus et just  euismod. Lorem ipsum dolor sit amet"
                    />
                </PostsWrapper>
            </Section>
        </PageContainer>
    );
};
