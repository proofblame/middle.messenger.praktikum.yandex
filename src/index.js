import "./index.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import Chat from "./pages/chat";
import Error from "./pages/error";

const root = document.getElementById("root");
root.innerHTML = Error({
  number: 500,
  message: "Мы уже фиксим",
});
