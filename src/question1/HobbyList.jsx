import React from "react";
import { useState } from "react";

export default function HobbyList({
  handleClickAdd,
  handleClickRemove,
  hobbies,
}) {
  const [title, setTitle] = useState("");
  //   const [hobbies, setHobbies] = useState([
  //     { id: 1, title: "videogames" },
  //     { id: 2, title: "knitting" },
  //     { id: 3, title: "painting" },
  //   ]);

  //   const handleClickAdd = (title) => {
  //     setHobbies((hobbies) => [
  //       ...hobbies,
  //       { id: hobbies.length + 1, title: title },
  //     ]);
  //   };

  //   const handleClickRemove = (id) => {
  //     setHobbies((hobbies) => hobbies.filter((hobby) => hobby.id !== id));
  //   };

  return (
    <div className="">
      <input
        type="text"
        placeholder="New hobby"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleClickAdd}>Add hobby </button>{" "}
      <ul className="todoList">
        {hobbies.map((hobby) => (
          <div className="flex" key={hobby.id} hobby={hobby}>
            <div>{hobby.title}</div>
            <button onClick={handleClickRemove}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
