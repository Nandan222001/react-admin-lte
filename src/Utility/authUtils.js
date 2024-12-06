export const storeToken = (accessToken) => {
    const expirationTime = new Date().getTime() + 30 * 60 * 1000; 
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('tokenExpiration', expirationTime); 
  };
  
  
  export const getToken = () => {
    const token = localStorage.getItem('accessToken');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    
    if (token && tokenExpiration) {
      if (new Date().getTime() > tokenExpiration) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenExpiration');
        return null; 
      }
      return token; 
    }
  
    return null; 
  };
  