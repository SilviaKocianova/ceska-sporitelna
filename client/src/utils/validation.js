export const validateForm = (data) => {
    const errors = {};
  
    
    if (!data.name) {
      errors.name = 'Company name is required';
    }
  
  
    if (!data.ico) {
      errors.ico = 'ICO is required';
    } else if (!/^\d{8,10}$/.test(data.ico)) {
      errors.ico = 'ICO should be a number with 8-10 digits';
    }
  

    if (!data.address) {
      errors.address = 'Address is required';
    }
  

    if (!data.contact) {
      errors.contact = 'Contact is required';
    }
  

    if (!data.director) {
      errors.director = 'Director is required';
    }
  
    return errors;
  };
  