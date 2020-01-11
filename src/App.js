import React, { Component } from "react";
import Table from "./component/table";
import Form from "./component/form";
import NavBar from "./component/navbar";
// import BootStrap from "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
      <React.Fragment>
        <NavBar />

        <div className="container">
          <Table
            characterData={characters}
            removeCharacter={this.removeCharacter}
          />
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
