import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {id : 'asdfas', name: 'Max', age: 28},
      {id : 'asdaw2', name : 'Manu', age: 29},
      {id : '213asd', name: 'Steph', age:26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
   // const persons = this.state.persons.slice(); // Copies the new array.
   const persons = [...this.state.persons]; // new array with the object of the old array. But the not old array itself. Modern one! Use this!
    persons.splice(personIndex,1);
    //In JS, obj and arrays are reference types. Orijinal dataya ulaşıyorum. Bu bad practice. Kopya oluşturmalıyız.
    this.setState({persons:persons});

  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p=> {
      return p.id===id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }; // Get from original data, but copies it.

    // const person = Object.assign({},this.state.persons[personIndex]); Same but oldschool.

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState(  {persons : persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  } 

  render() {

const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8 px' ,
  cursor: 'pointer'
};

let persons = null;


if(this.state.showPersons){
  // persons true ise aşağıdaki JSX yazdırılacak, false ise null dönecek.
  // render metodunun içinde yazmak mantıklı mı bilemiyorum.
     persons = (
        <div >
          {this.state.persons.map((person,index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event,person.id)}
              />
            })}
         </div>
  );
}

    return (
      <div className="App">
          <h1>Hi, Im'a react app!</h1>
          <p>This is really working!!</p>
          <button
          style={style}
          onClick={this.togglePersonsHandler}> Toggle Person </button>
         {persons} 
      </div>
    );
  }
}

export default App;
