import React from 'react';

export const CharacterListItem = ({
   name, age, img, status
}) => (
   <div className="list-row">
      {/* <div className="list-row__image-container">
      <img src={img}></img>
      </div> */}
      <div className="list-row__info">
         <div className="list-row__title">{name}</div>
         <div>Age: {age}</div>
         <div>Status: {status}</div>
      </div>
   </div>
);

export default CharacterListItem;