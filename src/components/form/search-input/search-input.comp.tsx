import React from 'react';

import { IconSearch } from '@tabler/icons-react';

import * as S from './search-input.styles';
import { SearchInputProps } from './search-input.types';

const SearchInput: React.FC<SearchInputProps> = ({ value, placeholder, onChange }) => {
  return (
    <S.SearchInputWrapper>
      <S.SearchInput
        data-testid="search-input"
        value={value}
        placeholder={placeholder}
        onChange={e => {
          onChange(e.target.value);
        }}
      />

      <S.SearchInputIcon>
        <IconSearch size={20} />
      </S.SearchInputIcon>
    </S.SearchInputWrapper>
  );
};
export { SearchInput };
