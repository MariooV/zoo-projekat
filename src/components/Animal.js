const Animal = ({ animal, handleOnRemove, index }) => {
  return (
    <tr>
      <td>{animal.species}</td>
      <td>{animal.name}</td>
      <td>
        {animal.birthday ? animal.birthday.toLocaleDateString() : "Nepoznat"}
      </td>
      <td>
        <button onClick={() => handleOnRemove(index)}>Remove</button>
      </td>
    </tr>
  );
};

export default Animal;
