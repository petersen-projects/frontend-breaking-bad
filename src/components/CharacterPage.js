import React from 'react';

import CharacterList from './CharacterList';
import CharacterListFilter from './CharacterListFilter';
import Header from './Header';

export const CharacterPage = () => (
   <div className="character-page-container">
      <Header />
      <CharacterListFilter />
      <CharacterList />
   </div>
);

export default CharacterPage;