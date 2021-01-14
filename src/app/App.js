import { Helmet } from "react-helmet";
import HomePage from "../pages/home";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
        />
      </Helmet>
      <HomePage />
    </div>
  );
}

export default App;
