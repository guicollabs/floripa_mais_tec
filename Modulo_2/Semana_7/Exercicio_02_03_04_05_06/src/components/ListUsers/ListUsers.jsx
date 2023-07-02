import Like from '../Like/Like';

const ListUsers = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.nickname}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>
              <Like />
            </td>
            <td>
              <button onClick={() => alert(`Editar: ${user.nickname}`)}>
                Editar
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default ListUsers;
