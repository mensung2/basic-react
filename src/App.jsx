const App = () => {
  return (
    <>
      <div className="todoLayout">
        <div className="todoBody">
          <div className="todoHader">
            <h1>To do list</h1>
            <form>
              <input></input>
              <button>제출</button>
            </form>
          </div>
          <div className="todoMain">
            <ul>
              <li style={{ textDecoration: "line-through" }}>
                <span>굶기</span>
                <button>취소</button>
                <button>완료</button>
              </li>
              <li>
                <span>먹기</span>
                <button>완료</button>
                <button>완료</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
