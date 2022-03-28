import { Container } from "react-bootstrap";
import "./App.css";
import { Title } from "./component/title/Title";

const App = () => {
  return (
    <div className="wrapper">
      <Container>
        <Title></Title>
      </Container>
    </div>
  );
};

export default App;
