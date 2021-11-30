import axios from "axios";

export default axios.create({
  baseURL: "http://3.140.240.106:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});