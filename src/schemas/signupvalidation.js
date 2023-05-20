
import * as Yup from 'yup';

export const signupSchema = Yup.object({
    username: Yup.string().min(2).max(25).required("please enter your name"),
    Email: Yup.string().email().required("please enter your email"),
    Password: Yup.string().min(8).required("please enter password"),
    Password_Again: Yup.string().required().oneOf([Yup.ref("Password"), null], "password must match"),
    First_Name: Yup.string().min(2).max(25).required("please enter first name"),
    Last_Name: Yup.string().min(2).max(25).required("please enter last name"),
    Mobile_No: Yup.string().min(10).required("please enter mobile no"),
    Degree: Yup.string().required("please enter degree"),
    Expertise:Yup.string().required("please enter expertise")
  // Degree: Yup.string().when("instructChk", {
    //    is: (instructChk) => instructChk === true,
      //  then: Yup.string().required("please enter degree"),
        //otherwise: Yup.string()
    //}),
    
   // Expertise: Yup.string().when("instructchk"", {
     // is: true,
      //then: Yup.string().required("please enter expertise"),
   // }),

   // quaoption: Yup.string().required("select option")

});