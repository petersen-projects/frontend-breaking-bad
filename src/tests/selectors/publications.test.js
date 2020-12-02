import { selectCharacters } from '../../selectors/characters';
import characters from '../fixtures/characters';

test('should filter by existing characterName', () => {
   const result = selectCharacters({data: characters, name: 'Jesse'});
   expect(result).toEqual([ characters[1] ]);
});

test('should filter by nonexisting characterName', () => {
   const result = selectCharacters({data: characters, name: 'Arnold'});
   expect(result).toEqual([]);
});