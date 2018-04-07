import Vue from 'vue';
import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD';

Vue.filter('formatDate', (value) => {
  if (moment.isMoment(value)) {
    return value.format(DATE_FORMAT);
  } else if (value) {
    return moment(String(value)).format(DATE_FORMAT);
  }

  return '';
});
