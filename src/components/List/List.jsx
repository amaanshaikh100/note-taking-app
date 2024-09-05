import "./list.scss";

function List({ list, onDelete, onComplete }) {
  const date = new Date(list.date);
  const day = String(date.getDate()).padStart(2, 0);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="list">
      <span>Created on: {formattedDate}</span>
      <h2>{list.heading}</h2>
      <p>{list.text}</p>

      <div className="btnsContainer">
        <button
          href="#"
          className="complete"
          onClick={() => onComplete(list.id)}
        >
          Completed
        </button>
        <button href="#" className="delete" onClick={() => onDelete(list.id)}>
          Delete
        </button>
      </div>

      <span>Priority: {list.priority}</span>
    </div>
  );
}

export default List;
