export const selectCharacters = (
   {data, name = '', status = '', offset = 0, limit = 10}
) => {
   const filteredData = filterData({data, name, status});
   return filteredData.slice(offset * limit, (offset * limit) + limit);
}

export const getNumberOfPages = ({data, name = '', status = '', limit = 10}) => {
   return Math.ceil(
      filterData({data, name, status}).length / 10
   );
}

const filterData = ({data, name, status}) => {
   return data.filter((character) => {
      const textMatch = character.name.toLowerCase().includes(name.toLowerCase());
      const statusMatch = status ? character.status.toLowerCase().includes(status) : true;

      return textMatch && statusMatch;
   });
}