import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setNameFilter, setCharacterStatusFilter } from '../actions/filters';
import { startGetAllCharactersFromWs } from '../actions/characters';

export const CharacterListFilter = () => {
   const name = useSelector(state => state.filters.name)
   const status = useSelector(state => state.filters.status)
   const dispatch = useDispatch()

   const onNameChange = (e) => {
      dispatch(setNameFilter(e.target.value))  
   }
   const onStatusFilterChange = (e) => {
      dispatch(setCharacterStatusFilter(e.target.value))
   }

   return (
      <div>
         <input
            type="text"
            placeholder="Search by character name..."
            value={name}
            onChange={onNameChange}
         />
         <select
            className=""
            value={status}
            onChange={onStatusFilterChange}
         >
            <option value="">Choose one Status</option>
            <option value="alive">Alive</option>
            <option value="deceased">Deceased</option>
         </select>
         <button>Search</button>
      </div>
   )
}

export default CharacterListFilter;