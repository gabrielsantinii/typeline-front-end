import { useRouter } from "next/router";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import {
    BodyContainer,
    MainContainer,
    SidebarContainer,
    PageTitle,
    PageTitleContainer,
    BackIcon,
} from "./page-container-styles";

type Props = {
    title: string;
};

export const PageContainer: React.FC<Props> = ({ children, title }) => {
    const { pathname, back } = useRouter();
    return (
        <>
            <Header />
            <BodyContainer>
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>
                <MainContainer>
                    <PageTitleContainer>
                        {pathname.split("/")[1] !== "home" && <BackIcon onClick={back} />}
                        <PageTitle>{title}</PageTitle>
                    </PageTitleContainer>
                    {children}
                </MainContainer>
            </BodyContainer>
        </>
    );
};
