export default function validate(values) {
    let errors = {};
  
    if (!values.name) {
      errors.name = 'Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.age) {
      errors.age = 'Age is required';
    } else if (values.age <= 0) {
      errors.age = 'Age must be greater than 0';
    }
  
    if (!values.attendingWithGuest) {
      errors.attendingWithGuest = 'Please indicate if you are attending with a guest';
    }
  
    if (values.attendingWithGuest === 'Yes' && !values.guestName) {
      errors.guestName = 'Guest name is required';
    }
  
    return errors;
  }
  