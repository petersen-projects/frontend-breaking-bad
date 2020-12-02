import React from 'react';

export const CharacterListItem = ({
   name, age, img, status, lastCharacterRef
}) => (
   <div ref={lastCharacterRef} className="list-item">
      <img className="list-item__image" src={img}></img>
      <div className="list-item__info">
         <div className="list-item__title">{name}</div>
         <div className="list-item__info1">Age: {age}</div>
         <div className="list-item__info2">Status: {status}</div>
      </div>
   </div>
);

export default CharacterListItem;