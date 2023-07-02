import { useState } from 'react';

const Like = () => {
  const [likes, setLikes] = useState(0);
  return <button onClick={() => setLikes((l) => l + 1)}>❤️ {likes}</button>;
};

export default Like;
