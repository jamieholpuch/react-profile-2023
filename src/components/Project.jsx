import "../styles/project.css";
import BootcampSims from "../assets/BootcampSims.png"
import FeedMe from "../assets/FeedMe.png"
import JATE from "../assets/JATE.png"
import NoteTaker from "../assets/NoteTaker.png"
import WeatherDashboard from "../assets/WeatherDashboard.png"
import Workday from "../assets/Workday.png"

function Project() {
  return (
    <div className="project">
      <h1 className="portfolio-header">my portfolio</h1>
      <p className="portfolio-text">
        click on the images below to see some of my work
      </p>
      <div className="row mx-5 mt-5 p-5">
        <div className="col-sm-4 mb-3 mb-sm-5">
          <div className="card">
          <a href="https://sleepy-bastion-85660-296a6fa2f982.herokuapp.com/">
            <img
              src={FeedMe}
              className="card-img-top"
              alt="..."
            />
            </a>
            <div className="card-body">
              <h5 className="card-title">Feed Me</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
          <a href="https://github.com/jamieholpuch/work-day-scheduler">
            <img
              src={Workday}
              className="card-img-top"
              alt="..."
            />
            </a>
            <div className="card-body">
              <h5 className="card-title">Work Day Scheduler</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <a href="https://github.com/jamieholpuch/pwa-text-editor">
              <img
                src={JATE}
                className="card-img-top"
                alt="..."
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Just Another Text Editor</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-3 mb-sm-5">
          <div className="card">
          <a href="https://github.com/jamieholpuch/weather-dashboard">
            <img
              src={WeatherDashboard}
              className="card-img-top"
              alt="..."
            />
            </a>
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
          <a href="https://github.com/jamieholpuch/projectone_girlpowervibes">
            <img
              src={BootcampSims}
              className="card-img-top"
              alt="..."
            />
            </a>
            <div className="card-body">
              <h5 className="card-title">Bootcamp Simulation Game</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
          <a href="https://github.com/jamieholpuch/note-taker">
            <img
              src={NoteTaker}
              className="card-img-top"
              alt="..."
            />
          </a>
            <div className="card-body">
              <h5 className="card-title">Note Taker App</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
