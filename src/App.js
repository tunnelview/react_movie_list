import { Container } from "react-bootstrap";
import "./App.css";
import { Title } from "./component/title/Title";
import { BUtton, col, Form, Row } from "react-bootstrap";
import { Movielist } from "./movieList/Movielist";
import { SearchForm } from "./form/SearchForm";

const App = () => {
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm />
        <hr />
        <Movielist />
      </Container>
    </div>
  );
};

export default App;
