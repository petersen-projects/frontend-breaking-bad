import { calculateAgeFromBirthdayString } from '../utils/functions';

export const parseCharactersResultFromWs = (characters) => {
   return characters.map(character => ({
      id: character.char_id,
      name: character.name,
      birthday: character.birthday,
      age: calculateAgeFromBirthdayString(character.birthday),
      img: character.img,
      nickname: character.nickname,
      status: character.status
   }));
};