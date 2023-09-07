export const constants = {
    serverUrl: 'http://15.206.27.240:7777'
    
  }

let token = sessionStorage.getItem('token');

export const config = {
  
  headers:{
    "Authorization":`Bearer ${token}`
  }
};
  