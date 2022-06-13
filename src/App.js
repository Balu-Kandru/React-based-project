import './App.css';


function App(props) {
  return (
    <>
      <div className='main'>
          <img src={props.employee.profileImg} alt="pic from w3schools" ></img>
          <h1 name='' >{props.employee.name}</h1>
          <label for="loc" >Location</label>
          <h3 name='loc'>{props.employee.location}</h3>
          <label for="blood">Blood group</label>
          <h3 name="blood">{props.employee.bloodGroup}</h3>
          <label for="age">Age</label>
          <h3 for="age">{props.employee.age}</h3>
      </div>
    </>
  );
}

export default App;
