// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import HobbyList from "./HobbyList";
import { useState } from "react";

function App() {
  const [hobbies, setHobbies] = useState([
    { id: 1, title: "videogames" },
    { id: 2, title: "knitting" },
    { id: 3, title: "painting" },
  ]);

  const handleClickAdd = (title) => {
    setHobbies((hobbies) => [
      ...hobbies,
      { id: hobbies.length + 1, setTitle: title },
    ]);
  };

  const handleClickRemove = (id) => {
    setHobbies((hobbies) => hobbies.filter((hobby) => hobby.id !== id));
  };

  return (
    <div className=" flex-col">
      <h1 className="text-white text-4xl font-bold mb-8">Hobbies</h1>
      <div className="space-y-6 ">
        <HobbyList
          hobbies={hobbies}
          handleClickRemove={handleClickRemove}
          handleClickAdd={handleClickAdd}
        />
      </div>
    </div>
  );
}

export default App;
