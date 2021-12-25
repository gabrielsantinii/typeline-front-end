import type { NextPage } from "next";
import Head from "next/head";
import { ExploreLayout } from "@/src/presentation/pages";
import { GlobalStyles, theme } from "@/src/styles";
import { ThemeProvider } from "styled-components";

const Explore: NextPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Explore - Typeline</title>
            </Head>
            <ExploreLayout />
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default Explore;
