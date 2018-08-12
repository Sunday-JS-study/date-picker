import moment from 'moment';
import Format from './Format';

export default class {
  constructor (node) {
    node.append(`Hello world!`);
  }

  validateInput (input) {
    let validity = false;
    Format.forEach((format) => {
      if (moment(input, format).isValid()) {
        validity = true;
      }
    });
    return validity;
  }
}
