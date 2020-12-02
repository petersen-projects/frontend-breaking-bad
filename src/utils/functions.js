import moment from 'moment';

const DATE_FORMAT = 'MM-DD-YYYY';

export const calculateAgeFromBirthdayString = (birthdayString) => {
   let now = moment();
   let birthdayMoment = moment(birthdayString, DATE_FORMAT);

   if (birthdayMoment.isValid()) {
      return now.diff(
         birthdayMoment, 'years'
      );
   } else {
      return '-';
   }
} 