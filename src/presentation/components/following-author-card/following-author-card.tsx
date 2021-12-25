import { FollowingAuthorModel } from "@/src/domain/models";
import { Avatar } from "@/src/presentation/components";
import Link from "next/link";

import { Container, AvatarContainer, ProfileInfos, Subtitle, Title } from "./following-author-card-styles";

export function FollowingAuthorCard({ name, username }: FollowingAuthorModel) {
    return (
        <Link href={`/profiles/${username}`}>
            <Container className="author-card">
                <AvatarContainer>
                    <Avatar />
                </AvatarContainer>

                <ProfileInfos className="profile-infos">
                    <Title className="title">{name}</Title>
                    <Subtitle>@{username}</Subtitle>
                </ProfileInfos>
            </Container>
        </Link>
    );
}
