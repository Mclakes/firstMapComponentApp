import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts.js";
import Avatar from "./Avatar.jsx";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Avatar img="https://scontent.flos8-1.fna.fbcdn.net/v/t1.6435-9/87475034_1935991469865998_5509229420449103872_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PhEdSXBcdMQAX_uKHgn&_nc_ht=scontent.flos8-1.fna&oh=00_AT_qlsFwwD7jtOjNKcshYA5QryHCErLp_L_oYjEdG_aeMQ&oe=628D32A0" />

      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
