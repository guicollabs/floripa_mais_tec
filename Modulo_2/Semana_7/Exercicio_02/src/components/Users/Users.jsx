import styles from './Users.module.css';
import { ListUsers } from '../ListUsers';

const Users = ({ users }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>NICKNAME</th>
          <th>AGE</th>
          <th>EMAIL</th>
          <th>PASSWORD</th>
          <th>LIKES</th>
          <th>EDITAR</th>
        </tr>
      </thead>
      <tbody>
        <ListUsers users={users} />
      </tbody>
    </table>
  );
};

export default Users;
