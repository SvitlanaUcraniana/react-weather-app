import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          This project was coded by Svitlana Ivanishyna and is
          <a
            href="https://github.com/SvitlanaUcraniana/react-weather-app"
            target="blank"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and
          <a
            href="https://superb-florentine-b79fec.netlify.app/"
            target="blank"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
