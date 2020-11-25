import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };
  getRandomCeleb = () => {
    const randomIndex = Math.floor(
      Math.random() * (contacts.length - 1 - 5 + 1) + 5
    );
    const randomCeleb = contacts[randomIndex];
    return randomCeleb;
  };
  addRandomCeleb = () => {
    const celeb = this.getRandomCeleb();
    const celebsCopy = [...this.state.contacts];
    celebsCopy.push(celeb);
    this.setState({
      contacts: celebsCopy,
    });
  };
  sortByName = () => {
    let mapCelebs = [];
    let sortCelebs = [];
    let sortArray = [];
    let array = 0;
    let celebsCopy = [...this.state.contacts];
    celebsCopy.map((value) => {
      mapCelebs.push(value.name);
      sortArray.push(value.name);
    });
    sortArray = sortArray.sort();
    sortArray.forEach((element) => {
      array = mapCelebs.indexOf(element);
      sortCelebs.push(celebsCopy[array]);
    });
    this.setState({
      contacts: sortCelebs,
    });
  };

  sortByPopularity = () => {
    let mapCelebs = [];
    let sortCelebs = [];
    let sortArray = [];
    let array = 0;
    let celebsCopy = [...this.state.contacts];
    celebsCopy.map((value) => {
      mapCelebs.push(value.popularity);
      sortArray.push(value.popularity);
    });
    sortArray = sortArray.sort(function (a, b) {
      return b - a;
    });
    sortArray.forEach((element) => {
      array = mapCelebs.indexOf(element);
      sortCelebs.push(celebsCopy[array]);
    });
    this.setState({
      contacts: sortCelebs,
    });
  };
  deleteFunc = (id) => {
    let celebsCopy = [...this.state.contacts];
    let mapArray = [];
    celebsCopy.map((value) => {
      mapArray.push(value.id);
    });
    let ID = mapArray.indexOf(id);
    celebsCopy.splice(ID, 1);
    this.setState({
      contacts: celebsCopy,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button type="button" onClick={this.addRandomCeleb}>
          Random Celebriy
        </button>
        <button type="button" onClick={this.sortByName}>
          Sort by Name
        </button>
        <button type="button" onClick={this.sortByPopularity}>
          Sort by Popularity
        </button>
        <table>
          <thead>
            <tr>
              <th>
                <strong>Picture</strong>
              </th>
              <th>
                <strong>Name</strong>
              </th>
              <th>
                <strong>Popularity</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      style={{ height: '100px', width: '100px' }}
                      alt={contact.name}
                    ></img>
                  </td>
                  <td>
                    <strong>{contact.name}</strong>
                  </td>
                  <td>
                    <strong>{contact.popularity}</strong>
                  </td>
                  <button
                    type="button"
                    onClick={() => this.deleteFunc(contact.id)}
                  >
                    Delete
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
