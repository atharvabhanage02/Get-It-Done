import axios from "axios";
// import { useAuth } from "../Context/Auth/auth-context";
const loginHandler = ({ email, pass }, setAuth, navigate) => {
  (async () => {
    try {
      const { data, status } = await axios.post("/api/auth/login", {
        email: email,
        password: pass,
      });
      if (status === 200) {
        localStorage.setItem("token", JSON.stringify(data.encodedToken));
        setAuth({
          isLogIn: true,
          tokenValue: JSON.stringify(data.encodedToken),
        });
        navigate("/notes");
      }
    } catch (error) {
      console.log("Error occured", error);
    }
  })();
};

export { loginHandler };
