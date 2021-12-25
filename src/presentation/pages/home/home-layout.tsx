import { NextPage } from "next";
import { PageContainer, PostsWrapper, Post } from "@/src/presentation/components";

export const HomeLayout: NextPage = () => {
    return (
        <PageContainer title="Timeline">
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
                <Post
                    name="Gabriel Santini"
                    postedAt={new Date()}
                    username="gabrielsantini"
                    contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et dolor. Cum sociis natoque penatibus et just  euismod. Lorem ipsum dolor sit amet"
                />
                <Post
                    name="Gabriel Santini"
                    postedAt={new Date()}
                    username="gabrielsantini"
                    contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et dolor. Cum sociis natoque penatibus et just  euismod. Lorem ipsum dolor sit amet"
                />
                <Post
                    name="Gabriel Santini"
                    postedAt={new Date()}
                    username="gabrielsantini"
                    contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et dolor. Cum sociis natoque penatibus et just  euismod. Lorem ipsum dolor sit amet"
                />
            </PostsWrapper>
        </PageContainer>
    );
};
