import axios from "axios";
const signupHandler = async (firstname, lastname, email, pswrd) => {
  try {
    const { data } = await axios.post(`/api/auth/signup`, {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: pswrd,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export { signupHandler };
