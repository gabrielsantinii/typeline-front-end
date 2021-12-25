import Head from "next/head";
import type { GetStaticPropsResult, GetStaticPathsResult } from "next";
import { ThemeProvider } from "styled-components";
import { ProfileModel } from "@/src/domain/models";
import { ProfileLayout } from "@/src/presentation/pages";
import { GlobalStyles, theme } from "@/src/styles";

const Profile: React.FC<ProfileModel> = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>{props.name} - Perfil</title>
            </Head>
            <ProfileLayout {...props} />
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default Profile;

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    return {
        paths: [
            {
                params: {
                    profileId: "gabrielsantini",
                },
            },
        ],
        fallback: true,
    };
}

export async function getStaticProps(): Promise<GetStaticPropsResult<ProfileModel>> {
    const data: ProfileModel = {
        name: "Gabriel Santini",
        description:
            "Organization, focus, autodidactism and collectivity. Im a Specialist in Zoho business software development, implementing and consulting. Along with that, Im a Passionate software developer focused on fullstack, with main knowledge in React and Node with Typescript.",
        followersCount: 332,
        likesCount: 1432,
        username: "gabrielsantini",
        backgroundUrl: "",
        avatarUrl: "",
        posts: [],
    };
    return {
        props: {
            ...data,
        },
    };
}
