import styled from "styled-components";

export const RecommendedAuthorsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    > .recommended-author-card + .recommended-author-card {
        margin-top: 15px;
    }

    @media (min-width: 1200px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        > .recommended-author-card + .recommended-author-card {
            margin-top: 0px;
        }
    }
`;
