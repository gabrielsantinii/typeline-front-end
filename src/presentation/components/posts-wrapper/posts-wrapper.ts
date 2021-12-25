import styled from "styled-components";

export const PostsWrapper = styled.div`
    > .post-container + .post-container {
        margin-top: 15px;

        border-top: 1px solid ${({ theme }) => theme.colors.hoverPrimaryText};
        padding-top: 10px;
    }
`;
