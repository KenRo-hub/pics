import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID eVf5hAlp5IH4wRM-ORmwnT5LxhQmLaZEtuvSP5FB0_4",
  },
});
