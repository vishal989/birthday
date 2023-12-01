import { useRef, useState } from 'react'

function App() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const deptRef = useRef();
  const isCheckedRef = useRef();
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [ageErr, setAgeErr] = useState("");
  const [deptErr, setDeptErr] = useState("");
  const [isCheckedErr, setIsCheckedErr] = useState(false);

  const handleReset = () => {
    console.log('Resetting');
    fullNameRef.current.value="";
    emailRef.current.value="";
    ageRef.current.value="";
    deptRef.current.value="";
    isCheckedRef.current.value=false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
    const isFormValid = formValidations();

    if(isFormValid){
      submitForm();
    }
  }

  const submitForm = () => {
    console.log("Name : ", fullNameRef.current.value);
    console.log("Email : ", emailRef.current.value);
    console.log("Dept : ", deptRef.current.value);
    console.log("Age :", ageRef.current.value);

    handleReset();
  }

  const formValidations = () => {
    let isValid = false;
    let fullName = fullNameRef.current.value;
    let email = emailRef.current.value;
    let age = ageRef.current.value;
    let dept = deptRef.current.value;
    let isChecked = isCheckedRef.current.checked;

    if(fullName === ""){
      setNameErr("Full name is required");
    }
    else if(email === ""){
      setNameErr("");
      setEmailErr("Email is required"); 
    }
    else if(!validateEmail(email)){
      setNameErr("");
      setEmailErr("Email is not valid");
    }else if(dept === ""){
      setEmailErr("");
      setDeptErr("Dept is not valid");
    }
    else if(!isChecked){
      setDeptErr("");
      setIsCheckedErr("Check the box");
    }
    else{
      setIsCheckedErr("");
      isValid = true;
    }

    return isValid;
  }

  const validateEmail = (email) => {
    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
      return true;
    }
    return false;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='fname'>Full Name</label>
          <input type="text" id="fname" ref={fullNameRef}/>
          <span>{nameErr}</span>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type="text" id="email" ref={emailRef}/>
          <span>{emailErr}</span>
        </div>
        <div>
          <label htmlFor='age'>Age</label>
          <input type="number" id="age" ref={ageRef}/>
        </div>
        <div>
          <label htmlFor='dept'>Dept</label>
          <select id="dept" ref={deptRef}>
            <option value="">Select</option>
            <option value="it">IT</option>
            <option value="hr">HR</option>
            <option value="se">SE</option>
          </select>
          <span>{deptErr}</span>
        </div>
        <div>
          <input type="checkbox" ref={isCheckedRef}/>
          <label>Agree with terms</label>
          <span>{isCheckedErr}</span>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </>
  )
}

export default App
