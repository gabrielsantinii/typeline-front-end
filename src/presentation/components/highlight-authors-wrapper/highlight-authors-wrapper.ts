import styled from "styled-components";

export const HighlightAuthorsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    > .highlight-author-card + .highlight-author-card {
        margin-top: 15px;
    }

    @media (min-width: 1200px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        > .highlight-author-card + .highlight-author-card {
            margin-top: 0px;
        }
    }
`;
