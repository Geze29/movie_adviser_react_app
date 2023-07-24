import axios from "axios";
import { BASE_URL,API_KEY } from "../config";
export class API_FETCH{
    static async getPopular(){
        const response  = await axios.get(`${BASE_URL}movie/popular${API_KEY}`);
        return response.data.results;
    }
    static async getRecommendation(movie_id){
        const response  = await axios.get(`${BASE_URL}movie/${movie_id}/recommendations${API_KEY}`);
        return response.data.results;
    }
    
    static async getByTitle(title){
        const response  = await axios.get(`${BASE_URL}search/movie${API_KEY}&query=${title}`);
        return response.data.results;
    }

}

