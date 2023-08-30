import { useState } from "react";

const AnimalList = () => {
  const [animals, setAnimals] = useState([
    { species: "mamel", name: "whale", birthday: new Date() },
    { species: "mamel", name: "elephant" },
    { species: "mamel", name: "lion" },
    { species: "bird", name: "owl", birthday: new Date() },
    { species: "bird", name: "eagel", birthday: new Date() },
  ]);
  return (
    <table>
      <thead>
        <tr>
          <th>Species</th>
          <th>Name</th>
          <th>Birthday</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((animal, index) => (
          <tr key={index}>
            <td>{animal.species}</td>
            <td>{animal.name}</td>
            <td>
              {animal.birthday
                ? animal.birthday.toLocaleDateString()
                : "Nepoznat"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnimalList;
