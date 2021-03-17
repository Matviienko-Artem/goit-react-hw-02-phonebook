import React from 'react';

const ContactList = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
