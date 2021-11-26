import React, {  useState } from "react";
import Confirm from "./Form/Confirm";
import FormPersonalDetails from "./Form/FormPersonalDeatails";
import FormUserDetails from "./Form/FormUserDetails";
import Success from "./Form/Success";
 
 
 
const UserForm = () =>  {

    const [formData , setForm ] = useState({
      step: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone : '',
    city: '',
    address : '',        
    });
 
   const nextStep = () => {
     setForm({ ...formData , 
      step: step + 1,
    });
  };

  const prevStep = () => {
     setForm({ ...formData ,
      step: step - 1,
    });
  };

 
 const  handleChange = (key )=> e => {
     setForm({ ...formData, [key]: e.target.value });
  };


    
  const { step } = formData;
  const { firstName, lastName, email, phone , city, address } = formData;
   const values = { firstName, lastName, email, phone , city, address };
 
 switch (step) {
   case 1:
     return (
       <FormUserDetails
         nextStep={nextStep}
         handleChange={handleChange}
         values={values}
       />
     );
   case 2:
     return (
       <FormPersonalDetails
         nextStep={nextStep}
         prevStep={prevStep}
         handleChange={handleChange}
         values={values}
       />
     );
   case 3:
     return (
       <Confirm
         nextStep={ nextStep}
         prevStep={ prevStep}
         values={values}
       />
     );
   case 4:
     return <Success />;
   default:
 
  }
}

export default UserForm;
