import Form from "../components/Form/Form";
import Stats from "../components/Stats/Stats";
import "./userDashboard.scss";

function UserDashboard({ onSubmitList }) {
  return (
    <>
      <Form onSubmitList={onSubmitList} />
      <Stats />
    </>
  );
}

export default UserDashboard;
