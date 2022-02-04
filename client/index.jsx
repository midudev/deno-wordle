import { App } from "../src/index.jsx";

ReactDOM.hydrate(
  <App pathname={window.location.pathname} />,
  document.getElementById("root"),
);
