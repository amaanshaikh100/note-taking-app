import { useState } from "react";
import allLists from "./lib/data.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Form from "./components/Form/Form.jsx";
import Search from "./components/Search/Search.jsx";
import Card from "./components/Card/Card.jsx";
import Filter from "./components/Filter/Filter.jsx";
import UserDashboard from "./UserDashboard/UserDashboard.jsx";

import "./index.css";

function App() {
  const [filter, setFilter] = useState("all");
  const [lists, setLists] = useState(allLists);

  function handleSubmitList(list) {
    toast("Your list has been added.");
    setLists((prev) => [...prev, list]);
  }

  function handleComplete(id) {
    setLists((prev) =>
      prev.map((list) =>
        list.id === id ? { ...list, isCompleted: !list.isCompleted } : list
      )
    );
  }

  function handleDelete(id) {
    toast("Your list has been deleted.");
    setLists((prev) => prev.filter((list) => list.id !== id));
  }

  return (
    <div className="container">
      <ToastContainer />
      <div className="dashboard">
        <UserDashboard onSubmitList={handleSubmitList} />
      </div>

      <div className="list-config">
        <div className="search">
          <Search />
        </div>
        <div className="filter">
          <Filter filter={filter} setFilter={setFilter} />
        </div>
      </div>
      <Card
        filter={filter}
        allLists={lists}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
