import axios from "axios";
const api = axios.create({
    baseURL: "https://cors-everywhere.herokuapp.com/http://api.currencylayer.com"
});

export default api;