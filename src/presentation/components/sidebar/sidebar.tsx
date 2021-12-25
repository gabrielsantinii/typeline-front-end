import Link from "next/link";
import { useRouter } from "next/router";
import { Avatar, AuthorCard } from "@/src/presentation/components";

import {
    Container,
    MenuContainer,
    MenuOption,
    HomeIcon,
    SearchIcon,
    MainAuthorsContainer,
    MainAuthorsHeader,
    MainAuthorsContent,
    LogoutContainer,
    LogoutIcon,
} from "./styles";

export default function Sidebar() {
    const { pathname } = useRouter();
    return (
        <Container>
            <MenuContainer>
                <Link href="/home">
                    <MenuOption className={pathname.split("/")[1] === "home" ? "active" : ""}>
                        <HomeIcon /> <h3>Timeline</h3>
                    </MenuOption>
                </Link>
                <Link href="/explore">
                    <MenuOption className={pathname.split("/")[1] === "home" ? "" : "active"}>
                        <SearchIcon /> <h3>Explorar</h3>
                    </MenuOption>
                </Link>
            </MenuContainer>

            <MainAuthorsContainer>
                <MainAuthorsHeader>Principais autores</MainAuthorsHeader>

                <MainAuthorsContent>
                    <AuthorCard name="Gabriel Santini" username="gabrielsantini" />
                    <AuthorCard name="Gabriel Santini" username="gabrielsantini" />
                    <AuthorCard name="Gabriel Santini" username="gabrielsantini" />
                    <AuthorCard name="Gabriel Santini" username="gabrielsantini" />
                    <AuthorCard name="Gabriel Santini" username="gabrielsantini" />
                    <AuthorCard name="Gabriel Santini" username="gabrielsantini" />
                    <AuthorCard name="Gabriel Santini" username="gabrielsantini" />
                    <AuthorCard name="Gabriel Santini" username="gabrielsantini" />
                    <AuthorCard name="Gabriel Santini" username="gabrielsantini" />
                    <AuthorCard name="Gabriel Santini" username="gabrielsantini" />
                    <AuthorCard name="Gabriel Santini" username="gabrielsantini" />
                    <AuthorCard name="Gabriel Santini" username="gabrielsantini" />
                </MainAuthorsContent>
            </MainAuthorsContainer>
            <LogoutContainer>
                <Avatar />
                <LogoutIcon />
            </LogoutContainer>
        </Container>
    );
}
