const API = "http://localhost:3000/api";

export const authLoginApi = async (data) => {
  const url = `${API}/auth/login`;

  return fetch(url, {
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  
};
