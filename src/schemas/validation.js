
const validation = (values) =>{
    let errors = {}

    if(!values.name){
        errors.name = "name required"
    }
    else if(values.name.length < 3)
    {
        errors.name = "value more than 5 char"
    }
    if(!values.password){
        errors.password = "password required"
    }
    else if(values.password.length <8)
    {
        errors.password = " password more that 8 char"
    }
    return errors
}
export default validation;