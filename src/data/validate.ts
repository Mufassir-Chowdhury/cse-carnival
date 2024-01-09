export const validatePhoneNumber = (phoneNumber: string) => {
    const regex = /^01\d{9}$/;
    return regex.test(phoneNumber);
  };
  
  export const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  
  export const validateTshirtSize = (tshirt: string) => {
    const regex = /^(S|M|L|XL|XXL|XXXL)$/;
    return regex.test(tshirt);
  };
  
  export const validateGithubLink = (githubLink: string) => {
    const regex = /^https:\/\/github.com\/[a-zA-Z0-9]+$/;
    return regex.test(githubLink);
  };
  
  export const validateLinkedinLink = (linkedinLink: string) => {
    const regex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]+$/;
    return regex.test(linkedinLink);
  };