import {
    PageContainer,
    Section,
    SectionHeader,
    PostsWrapper,
    Post,
    HighlightAuthorsWrapper,
    HighlightAuthorCard,
} from "@/src/presentation/components";
import { SearchInput } from "../../components/search-input";
import { SearchSection, Wrapper } from "./explore-layout-styles";

export const ExploreLayout: React.FC<{}> = ({}) => {
    return (
        <PageContainer title="Explorar">
            <Wrapper>
                <SearchSection>
                    <SearchInput placeholder="Pesquisar" />
                </SearchSection>
                <Section>
                    <SectionHeader>Posts que talvez você curta</SectionHeader>
                    <PostsWrapper>
                        <Post
                            name="Gabriel Santini"
                            postedAt={new Date()}
                            username="gabrielsantini"
                            contentDescription="sadasd"
                        />
                        <Post
                            name="Gabriel Santini"
                            postedAt={new Date()}
                            username="gabrielsantini"
                            contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et dolor. Cum sociis natoque penatibus et just  euismod. Lorem ipsum dolor sit amet"
                        />
                    </PostsWrapper>
                </Section>
                <Section>
                    <SectionHeader>Autores recomendados para você</SectionHeader>
                    <HighlightAuthorsWrapper>
                        <HighlightAuthorCard
                            name="Gabriel Santini"
                            username="gabrielsantini"
                            description="sadasd"
                            avatarUrl=""
                            bannerUrl=""
                            followersCount={10}
                            likesCount={233}
                        />
                        <HighlightAuthorCard
                            name="Gabriel Santini"
                            username="gabrielsantini"
                            description="sadasd"
                            avatarUrl=""
                            bannerUrl=""
                            followersCount={10}
                            likesCount={233}
                        />
                        <HighlightAuthorCard
                            name="Gabriel Santini"
                            username="gabrielsantini"
                            description="sadasdasd asdasd asdasdaasasd asdasdasdas sadasdasd asd asdad asd assadasdasdads"
                            avatarUrl=""
                            bannerUrl=""
                            followersCount={10}
                            likesCount={233}
                        />
                    </HighlightAuthorsWrapper>
                </Section>
            </Wrapper>
        </PageContainer>
    );
};
