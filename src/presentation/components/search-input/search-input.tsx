import React from "react";
import { SearchIcon, SearchInputContainer } from "./styles";

type Props = {
    placeholder?: string;
    value?: string;
    onChange?: (v: string) => void;
};

export function SearchInput({ placeholder = "Pesquisar" }: Props): JSX.Element {
    return (
        <SearchInputContainer className="search-input-container">
            <input placeholder={placeholder} />
            <SearchIcon className="search-icon" />
        </SearchInputContainer>
    );
}
