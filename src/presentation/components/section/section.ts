import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    min-width: 100%;
`;
export const SectionHeader = styled.h3`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.highlight};
    min-width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.highlight};
    padding-bottom: 10px;
    margin-bottom: 15px;
`;
