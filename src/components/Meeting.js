import AddIcon from "@material-ui/icons/Add";

const Meeting = () => {
  return (
    <div className="meeting">
      <p>Meeting Rooms</p>
      <button>
        <AddIcon /> Create Room
      </button>
    </div>
  );
};

export default Meeting;
