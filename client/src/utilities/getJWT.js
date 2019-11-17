import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getJWT = () => {
  return {
    headers: {
      "Authorization": `Bearer ${cookies.get('token')}`
    }
  }
};