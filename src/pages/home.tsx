import type { NextPage } from "next";
import Head from "next/head";
import { HomeLayout } from "@/src/presentation/pages";
import { GlobalStyles, theme } from "@/src/styles";
import { ThemeProvider } from "styled-components";

const Home: NextPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Typeline - Sua timeline do Typescript.</title>
            </Head>
            <HomeLayout />
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default Home;
