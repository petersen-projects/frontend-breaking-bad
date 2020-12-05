import React from 'react';

import CharacterList from './CharacterList';
import CharacterListFilter from './CharacterListFilter';

const CharacterPage = () => (
   <div className="page-container">
      <CharacterListFilter />
      <CharacterList />
   </div>
);

export default CharacterPage;