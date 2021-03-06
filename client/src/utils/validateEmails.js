import _ from 'lodash';

export default (emails) => {
    const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const invalidEmails = emails
      .split(',')
      .map(email => email.trim())
      .filter(email => re.test(email) === false);

    if (invalidEmails.length && !_.endsWith(emails.trim(), ',')) {
        return `These emails are invalid: ${invalidEmails}`;
    }

    return;
};