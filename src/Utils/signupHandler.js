import axios from "axios";
const signupHandler = async (firstN, lastN, email, pswrd) => {
  try {
    const { data } = await axios.post(`/api/auth/signup`, {
      firstName: firstN,
      lastName: lastN,
      email: email,
      password: pswrd,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export { signupHandler };
