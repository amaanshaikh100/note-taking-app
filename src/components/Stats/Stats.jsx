import "./stats.scss";

function Stats({ lists }) {
  const pending = lists.filter((list) => !list.isCompleted).length;
  const completed = lists.filter((list) => list.isCompleted).length;

  return (
    <div className="statsContainer">
      <p>Tasks Pending: {pending}</p>
      <p>Tasks Completed: {completed}</p>
    </div>
  );
}

export default Stats;
