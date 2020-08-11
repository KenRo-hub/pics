import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit (event) {
    //metodo 1 enviar el metodo como un arrow function para evitar el error de this.state
    //metodo 2 realizar un arrow function en el onSubmit enviando el event para evitar el error
    event.preventDefault();

    this.props.onSubmit(this.state.term)
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
