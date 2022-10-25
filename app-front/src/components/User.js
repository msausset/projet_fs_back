import axios from "axios";

export const GET_USER = "GET_USER";

// Récupération de l'utilisateur actuel

export const getUser = (uid) => {
  // Envoi au reducer

  return (dispatch) => {
    return axios
      .get(`http://localhost:5000/api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
