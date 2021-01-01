import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [ personsState, setPersonsState ] = useState({
    persons : [
      { name: 'Max', age: 28},
      { name : 'Manu', age: 29},
      { name: 'Steph', age:26}
    ],
    otherState: 'some other value'
  }); 

  console.log(personsState);

  const switchNameHandler = () => {
    //console.log('Was clicked!');
    // DONT DO THIS : this.state.persons[0].name = 'Maximillian';
   // setState only changes overriding.
    setPersonsState( { 
      persons : [
      { name: 'Hüseyin', age:24},
      { name : 'Melisa', age: 22},
      { name: 'Devran', age:1}
    ],
    otherState: 'some other value'
  
  });
  }

    return (
      <div className="App">
          <h1>Hi, Im'a react app!</h1>
          <p>This is really working!!</p>
          <button onClick={switchNameHandler}> Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
}
export default app;
