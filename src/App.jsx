import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      text: "굶기",
      isDone: false,
    },
    {
      id: 2,
      text: "먹기",
      isDone: true,
    },
  ]);

  const handelTodoChange = (e) => {
    setTodo(e.target.value);
  };
  // todo를 표현하기 전에 임시적으로 저장하기 위함

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return alert("내용을 입력하세요.");

    const newPost = {
      id: Date.now(),
      text: todo,
      isDone: true,
    };

    setPosts([...posts, newPost]);

    setTodo("");
  };

  const handelDlete = (id) => {
    const filteredpost = posts.filter((post) => {
      return post.id !== id;
    });

    setPosts(filteredpost);
  };

  const handleChangeDone = (id) => {
    setPosts(
      posts.map((post) => {
        if (post.id === id) {
          return { ...post, isDone: !post.isDone };
        } else {
          return post;
        }
      })
    );
  };

  return (
    <>
      <div className="todoLayout">
        <div className="todoBody">
          <div className="todoHader">
            <h1>To do list</h1>
            <form onSubmit={handelSubmit}>
              <input
                type="text"
                value={todo}
                // 19번째 줄이랑 같은 값인데 여길 안 넣으면 인풋 값이 리셋이 안 됨 setTodo(""); 안됨
                // setTodo 가 변경되면서 리렌더링 되어서 todo가 바뀌니까 input 값이 날라가는 것임
                onChange={handelTodoChange}
              ></input>
              <button type="submit">제출</button>
            </form>
          </div>
          <div className="todoMain">
            <ul>
              {posts.map((post) => (
                <li
                  key={post.id}
                  style={{
                    textDecoration: post.isDone ? "none" : "line-through",
                  }}
                >
                  <span>{post.text}</span>
                  <button onClick={() => handleChangeDone(post.id)}>
                    {post.isDone ? "완료" : "취소"}
                  </button>
                  <button onClick={() => handelDlete(post.id)}>삭제</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
