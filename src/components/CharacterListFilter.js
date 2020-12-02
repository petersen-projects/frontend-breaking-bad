import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setNameFilter, setCharacterStatusFilter } from '../actions/filters';

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
      <div className="filter">
         <input
            type="text"
            placeholder="Search by character name..."
            value={name}
            onChange={onNameChange}
            className="filter__input"
         />
         <select
            className="filter__select"
            value={status}
            onChange={onStatusFilterChange}
         >
            <option value="">Choose one Status</option>
            <option value="alive">Alive</option>
            <option value="deceased">Deceased</option>
         </select>
      </div>
   )
}

export default CharacterListFilter;