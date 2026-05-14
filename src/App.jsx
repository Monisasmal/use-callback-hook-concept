

import { Component, useState, useEffect, useCallback,} from "react";


function Intro(){
  return(
    <div style={{background:"blue", padding:"10px", borderRadius:"5px", color:"white"}}>
      <h2>What is useCallback?</h2>
      <p>useCallback is a react hook that returns a memoized callback function.</p>
      <p>It’s mainly used to optimize performance by preventing unnecessary re-creations of functions on every render.</p>
      <h2>Syntax</h2>
    <strong>{"const memoizedFun = useCallback(() => { write fun},[dependencies])"}</strong>
    <p>🟡 If the dependencies don’t change, the same function reference is returned across renders.</p>
    <table border="1" cellPadding="8">
  <thead>
    <tr>
      <th>Question</th>
      <th>Answer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>What is useCallback used for?</td>
      <td>To memoize functions and avoid re-creating them on every render.</td>
    </tr>

    <tr>
      <td>Difference between useMemo and useCallback?</td>
      <td>useMemo memoizes values, useCallback memoizes functions.</td>
    </tr>

    <tr>
      <td>When should we use useCallback?</td>
      <td>When passing functions to child components or avoiding costly re-renders.</td>
    </tr>

    <tr>
      <td>What happens if dependencies change?</td>
      <td>A new function reference is created and may cause re-render.</td>
    </tr>

    <tr>
      <td>Is useCallback always needed?</td>
      <td>No, only use when function re-creation causes performance issues.</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}


// 1. Counter Pro using useCallback:---------------------------------------------------------------

function CounterCallback(){

  const[count,setCount] = useState(0);

 const increment = useCallback(()=>{
   setCount((prev) => prev+1)
 },[]);

 const decrement = useCallback(()=>{
  if(count>0){
    setCount((prev) => prev-1)
  }
 },[count])

 const reset = useCallback(()=>{
  setCount(0);
 },[])

 const btn = {
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    margin:"10px 10px",
    background:"pink"
  };

  return(
    <div style={{textAlign:"center", padding:"10px"}}>
      <h2>Count:{count}</h2>
      <button style={btn} onClick={increment}>Incremment</button>
      <button style={btn} onClick={decrement}>Decrement</button>
      <button style={btn} onClick={reset}>Reset</button>
    </div>
  )
}


// 2. TodoList using useCallback:-------------------------------------------------------------

function TodoCallback(){
  const[todo,setTodo] = useState([]);
  const[count,setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const addTodo = useCallback((newTask)=>{
    setTodo((prev) => [...prev, newTask])
  },[])

  return(
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h4>Counter: {count}</h4>
      <button
        onClick={increment}
        style={{
          padding: "10px 15px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#28a745",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        🔢 Increment Counter
      </button>
      <TodoList todo={todo} addTodo={addTodo} />
    </div>
  )
}

function TodoList({todo, addTodo}){
  const[input,setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      addTodo(input); // 👈 send input to parent
      setInput("");   // clear input after adding
    }
  };

  return(
    <div style={{ marginTop: "20px" }}>
       <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your task..."
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "60%",
          margin: "10px 10px",
        }}
      />
      <button
        onClick={handleAdd}
        style={{
          padding: "10px 15px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        ➕ Add Todo
      </button>

     <h3>My Tasks:</h3>
     <ul style={{ listStyleType: "none", padding: 0 }}>
        {todo.map((todos, index) => (
          <li key={index} style={{ marginBottom: "6px" }}>
            ✅ {todos}
          </li>
        ))}
      </ul>
    </div>
  )
}


const projects = [
  {
    category: "Basic",
    items: [
      {id:1, name: "Intoduction", Component: <Intro />},
      {id:2, name: "CounterCallback", Component: <CounterCallback />},
      {id:3, name: "ToDoList", Component: <TodoCallback />},
      
    ],
  },
  {
    category: "Intermediate",
    items: [

    ],
  },
  {
    category: "Advanced",
    items: [
      
    ],
  },
];


export default function App() {
  const [activeProject, setActiveProject] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Responsive handling for hamburger
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarStyle = {
    width: "250px",
    background: "#6200ea",
    color: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    position: "fixed",
    left: isMobile ? (isSidebarOpen ? "0" : "-260px") : "0",
    top: 0,
    bottom: 0,
    overflowY: "auto",
    transition: "left 0.3s ease",
    zIndex: 2000,
  };

  const hamburgerStyle = {
    position: "fixed",
    top: 20,
    left: 20,
    background: "#6200ea",
    color: "#fff",
    border: "none",
    padding: "10px 12px",
    borderRadius: "5px",
    fontSize: "20px",
    cursor: "pointer",
    zIndex: 2500,
    display: isMobile ? "block" : "none",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: isMobile && isSidebarOpen ? "block" : "none",
    zIndex: 1500,
  };

  const contentStyle = {
    flex: 1,
    marginLeft: isMobile ? "0" : "250px",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "margin-left 0.3s ease",
    background: "#ffffffff",
    minHeight: "80vh",
    minWidth:"70vw"
  };

  const menuBtn = (isActive) => ({
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: "8px 12px",
    background: isActive ? "#fff" : "#3700b3",
    color: isActive ? "#000" : "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "8px",
    transition: "0.3s",
  });

  const allItems = projects.flatMap((p) => p.items);
  const active = allItems.find((p) => p.id === activeProject)?.Component;

  return (
    <>
      <div style={overlayStyle} onClick={toggleSidebar}></div>
      <button style={hamburgerStyle} onClick={toggleSidebar}>
        ☰
      </button>

      <aside style={sidebarStyle}>
        <h2 style={{ textAlign: "center" }}>📂 useCallback Projects</h2>
        {projects.map((group) => (
          <div key={group.category}>
            <div style={{ fontWeight: "bold", marginBottom: 10 }}>
              {group.category}
            </div>
            {group.items.map((item) => (
              <button
                key={item.id}
                style={menuBtn(activeProject === item.id)}
                onClick={() => {
                  setActiveProject(item.id);
                  if (isMobile) toggleSidebar();
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        ))}
      </aside>

      <main style={contentStyle}>{active}</main>
    </>
  );
}
