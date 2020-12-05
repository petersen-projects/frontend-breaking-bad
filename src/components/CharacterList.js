import React, {
   useRef,
   useCallback,
   useEffect
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
   setCharactersOffset,
   resetCharactersOffset,
   startGetAllCharactersFromWs,
   setCharactersFilteredData,
   resetCharactersFilteredData,
   setCharactersNumberOfPages
} from '../actions/characters';
import { selectCharacters, getNumberOfPages } from '../selectors/characters';
import CharacterListItem from './CharacterListItem';
import Loading from './Loading';

const CharacterList = () => {
   const dispatch = useDispatch()

   const data = useSelector(state => state.characters.data)
   const filteredData = useSelector(state => state.characters.filteredData)
   const fetching = useSelector(state => state.characters.fetching)
   const numberOfPages = useSelector(state => state.characters.numberOfPages)
   const offset = useSelector(state => state.characters.offset)
   const limit = useSelector(state => state.characters.limit)
   const name = useSelector(state => state.filters.name)
   const status = useSelector(state => state.filters.status)

   useEffect(() => {
      dispatch(startGetAllCharactersFromWs())
   }, [])

   useEffect(() => {
      updateFilteredData(data)
   }, [data])

   useEffect(() => {
      if (offset > 0) {
         resetOffset()
      } else {
         refreshFilteredData()   
      }
   }, [name, status])

   useEffect(() => {
      if (offset > 0) {
         paginateData()
      } else {
         refreshFilteredData()
      }
   }, [offset])

   const observer = useRef()
   const lastCharacterRef = useCallback(node => {
      if (Math.ceil(filteredData.length / limit) >= numberOfPages) return
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver(entries => {
         if (entries[0].isIntersecting) {
            dispatch(setCharactersOffset(offset + 1))
         }
      })

      if (node) observer.current.observe(node)
   })

   const updateFilteredData = (() => {
      if (data.length) {
         dispatch(
            setCharactersFilteredData(
               selectCharacters({data, limit})
            )
         )
         dispatch(
            setCharactersNumberOfPages(
               getNumberOfPages({data, limit})
            )
         )
      }
   })

   const resetOffset = (() => {
      dispatch(resetCharactersOffset())
   })

   const refreshFilteredData = (() => {
      dispatch(
         resetCharactersFilteredData()
      )
      dispatch(
         setCharactersFilteredData(
            selectCharacters({data, limit, offset, name, status})
         )
      )
      dispatch(
         setCharactersNumberOfPages(
            getNumberOfPages({data, limit, offset, name, status})
         )
      )
   })

   const paginateData = () => {
      dispatch(
         setCharactersFilteredData(
            selectCharacters({
               data, offset, name, status
            })
         )
      )
   }

   return (
      <div className="list-body">
         { fetching == true ? <Loading /> : null}
         {
            filteredData.length === 0 ? (
               <div className="list-body__no-data-message">No data available</div>
            ) : (
               filteredData.map((character, index) => {
                  if (filteredData.length === index + 1) {
                     return (
                        <div ref={lastCharacterRef} key={index}>
                           <CharacterListItem {...character} />
                        </div>
                     )
                  } else {
                     return <CharacterListItem key={index} {...character} />
                  }
                     
               })
            )
         }
      </div>
   )
}

export default CharacterList;
