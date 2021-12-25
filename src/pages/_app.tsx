import { AppProps } from "next/app";
import { GlobalStyles, theme } from "@/src/styles";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
