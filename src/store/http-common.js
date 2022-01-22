import axios from "axios";
import urlState from "./env";

class Connection { 
    HTTP() {
        const instance = axios.create({
            baseURL : urlState.initialState.env,
            headers: {
                "Content-type" : "application/json",
                "authapp" : "Basic:793bb6c2-4807-4805-a092-0a91d5ff62d7"
            }
        })
        return instance;
    }
}

export default new Connection().HTTP();