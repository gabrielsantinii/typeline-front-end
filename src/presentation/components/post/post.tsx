import { PostModel } from "@/src/domain/models";
import Link from "next/link";
import { Avatar } from "..";
import {
    Container,
    ContentBody,
    ContentHeader,
    ContentWrapper,
    ProfileName,
    ProfileUsername,
    ContentFooter,
    ShareIcon,
    LikeIcon,
} from "./post-styles";

export function Post({ contentDescription, name, username }: PostModel): JSX.Element {
    return (
        <Container className="post-container">
            <Avatar />
            <ContentWrapper>
                <Link href={`/profiles/${username}`}>
                    <ContentHeader>
                        <ProfileName>{name}</ProfileName>
                        <ProfileUsername>@{username}</ProfileUsername>
                    </ContentHeader>
                </Link>
                <ContentBody>{contentDescription}</ContentBody>
                <ContentFooter>
                    <LikeIcon />
                    <ShareIcon />
                </ContentFooter>
            </ContentWrapper>
        </Container>
    );
}
