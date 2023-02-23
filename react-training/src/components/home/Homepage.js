import videoHomepage from "../../assets/Sharingan LiveWallPaper.mp4";

const Homepage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomepage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">There is a better way to ask</div>
        <div className="title-2">
          You dont want to make a boring form. And your audience wont answer
          one.
        </div>
        <div className="title-3">
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
