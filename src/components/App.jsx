import React ,{useState}from "react";
import Card from "./Card";
import contacts from"../contacts"

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
    function handleChange(event){
  const{name,value}=event.target;
  setContact((prevValue)=>{
  if(name==="fName"){
    return{fName:value,
    lName:prevValue.lName,
    email:prevValue.email};
  }
  else if(name==="lName"){
    return{fName:prevValue.fName,
    lName:value,
    email:prevValue.email};
  }
  else if(name==="email"){
    return{fName:prevValue.fName,
    lName:prevValue.lName,
    email:value};
  };
  });
    }
  return (<div>
    


    
    <div className="icon">
        <img src="METSA.png" ></img>
        </div>
        

    
    <div >
  <div className="container">
    
     <h1>
      Hello {contact.fName} {contact.lName}
      
    </h1>
    <p>{contact.email}</p>
    <form >
      <input onClick={handleChange}   name="fName" placeholder="First Name" />
      <input  onClick={handleChange}  name="lName" placeholder="Last Name" />
      <input onClick={handleChange}  name="email" placeholder="Email" />
      <button>Submit</button>
      
    </form>
    <p>Fill the above form to reach out to our team for any queries or details!</p>
  </div>
  
  </div >
    <h1 className="heading"> Contact our team!</h1>

  <Card name="Modi" img="https://www.discoverwalks.com/blog/wp-content/uploads/2020/10/800px-prime_minister_shri_narendra_modi_in_new_delhi_on_august_08_2019_cropped.jpg"tel="+987654"email="2@gmail.com"/>
  <Card name={contacts[1].name}img={contacts[1].imgURL}tel={contacts[1].phone}email={contacts[1].email}/>
  <Card name={contacts[2].name}img={contacts[2].imgURL}tel={contacts[2].phone}email={contacts[2].email}/>
  {/* <Card name={contacts[3].name}img={contacts[3].imgURL}tel={contacts[3].phone}email={contacts[3].email}/> */}
  <Card name={contacts[2].name}img={contacts[2].imgURL}tel={contacts[2].phone}email={contacts[2].email}/>
  
  
  </div>
  );





// return (
//   <div>
//   <div className="container">
//     <h1>
//       Hello {contact.fName} {contact.lName}
      
//     </h1>
//     <p>{contact.email}</p>
//     <form>
//       <input onClick={handleChange}   name="fName" placeholder="First Name" />
//       <input  onClick={handleChange}  name="lName" placeholder="Last Name" />
//       <input onClick={handleChange}  name="email" placeholder="Email" />
//       <button>Submit</button>
      
//     </form>
//     <p>Fill the above form to reach out to our team for any queries or details!</p>
//   </div>
  
//   </div>
// );

}


export default App;