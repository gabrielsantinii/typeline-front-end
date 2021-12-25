import { Avatar } from "@/src/presentation/components";
import { Container, AvatarContainer, ProfileInfos, Subtitle, Title } from "./author-card-styles";

type Props = {
    name: string;
    username: string;
};

export function AuthorCard({ name, username }: Props) {
    return (
        <Container className="author-card">
            <AvatarContainer>
                <Avatar />
            </AvatarContainer>

            <ProfileInfos className="profile-infos">
                <Title className="title">{name}</Title>
                <Subtitle>{username}</Subtitle>
            </ProfileInfos>
        </Container>
    );
}
