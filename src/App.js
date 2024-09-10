import { useState } from "react";
import allLists from "./lib/data.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Form from "./components/Form/Form.jsx";
import Stats from "./components/Stats/Stats.jsx";
import Search from "./components/Search/Search.jsx";
import Card from "./components/Card/Card.jsx";
import Filter from "./components/Filter/Filter.jsx";

import "./index.css";

function App() {
  const [filter, setFilter] = useState("pending");
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
    <div>
      <ToastContainer />
      <h1 className="heading-main">Note Taking App 📝</h1>
      <div className="list-detail-container">
        <Form onSubmitList={handleSubmitList} />
        {/* <Stats lists={lists} /> */}
      </div>

      <div className="list-filter-container">
        <Search allLists={allLists} />
        <Filter filter={filter} setFilter={setFilter} />
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
