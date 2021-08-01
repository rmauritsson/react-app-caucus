import PeopleIcon from "@material-ui/icons/People";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Card = () => {
  return (
    <div className="card">
      <div className="card_options">
        <MoreHorizIcon />
      </div>
      <div className="card_header">
        <h2>Group CTO</h2>
        <p>Last session on October, 2020</p>
      </div>
      <div className="card_body">
        <div className="content">
          <p>Participants</p>
          <div className="icons green">
            <PeopleIcon />
          </div>
          <p>30</p>
        </div>

        <div className="content">
          <p>Recordings</p>
          <div className="icons orange">
            <VideoLibraryIcon />
          </div>
          <p>30</p>
        </div>
      </div>
      <div className="card_footer">
        <button>Start Meeting</button>
      </div>
    </div>
  );
};

export default Card;
