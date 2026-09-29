import { useState } from "react";

function Task2() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h1>Task 2: Like Button</h1>

      <p>Total Likes: {likes}</p>

      <button onClick={handleLike}>
        Like
      </button>
    </div>
  );
}

export default Task2;