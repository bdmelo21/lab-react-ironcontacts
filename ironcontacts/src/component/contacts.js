import React from 'react';

function GiveContacts(props) {
  let picture = [];
  let name = [];
  let popularity = [];

  props.contacts.map((item) => {
    return (
      picture.push(item.pictureUrl),
      name.push(item.name),
      popularity.push(item.popularity)
    );
  });

  let newArray = [];
  for (let i = 0; i < 5; i++) {
    console.log(i);
    newArray.push(
      <tr>
        <th>
          <img
            src={picture[i]}
            style={{ height: '100px', width: '100px' }}
          ></img>
        </th>
        <th>
          <strong>{name[i]}</strong>
        </th>
        <th>
          <strong>{popularity[i]}</strong>
        </th>
      </tr>
    );
  }
  if (props.newNumber) {
    newArray.push(
      <tr>
        <th>
          <img
            src={picture[props.newNumber]}
            style={{ height: '100px', width: '100px' }}
          ></img>
        </th>
        <th>
          <strong>{name[props.newNumber]}</strong>
        </th>
        <th>
          <strong>{popularity[props.newNumber]}</strong>
        </th>
      </tr>
    );
  }
  newArray.join('');
  console.log(props.newNumber);
  return newArray;
}

export default GiveContacts;
