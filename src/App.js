import logo from "./logo.svg";
import james from "./images/profile-picture.png";
import "./App.css";

const imageDimensions = {
  width: "360px",
  height: "auto",
  borderRadius: "200px",
};

const card = {
  minHeight: "250px",
  width: "400px",
  backgroundColor: "#eee",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "flex-start",
  padding: "20px",
  boxSizing: "border-box",
};

const name = {
  marginBottom: "1rem",
};

const description = {
  marginTop: "0",
};

function App() {
  return (
    <div style={card}>
      <img src={james} style={imageDimensions} alt="James" />
      <h1 style={name}>James Dixon</h1>
      <p style={description}>
        I am a current student at IUPUI, taking this web-development class. I've
        been in the IT world for 14 years now, mostly doing desktop support. As
        of now, I'm currently a technical lead, in charge of knowledge
        retention. This class has been challenging but rewarding and I hope I
        can use these skills so my career may go into another, more fulfuilling
        position.
      </p>
    </div>
  );
}

export default App;
