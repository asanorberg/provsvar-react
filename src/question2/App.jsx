// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.

// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// },

import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        data = data.slice(0, 5);
        setPosts(data);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-3 place-items-center gap-2">
      {posts.map((post) => {
        return (
          <div
            className="flex flex-col border-2 w-full md:max-w-xs gap-6 text-center p-4"
            key={post.id}
          >
            <button onClick={() => console.log(post.id)}>{post.title}</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
