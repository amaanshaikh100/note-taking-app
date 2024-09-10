import List from "../List/List";
import "./card.scss";

function Card({ allLists, onComplete, onDelete, filter }) {
  let filteredLists = allLists;

  if (filter === "all") filteredLists = allLists;

  if (filter === "completed") {
    filteredLists = filteredLists.filter((list) => list.isCompleted === true);
  }

  if (filter === "pending") {
    filteredLists = filteredLists.filter((list) => list.isCompleted === false);
  }

  // if (query) {
  //   filteredLists = filteredLists.filter((list) =>
  //     list.heading.toLowerCase().includes(query)
  //   );
  // }

  return (
    <div className="listContainer">
      {filteredLists.map((list) => {
        return (
          <List
            key={list.id}
            list={list}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}

export default Card;
