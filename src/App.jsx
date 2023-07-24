
import { useEffect, useState } from "react";
import { API_FETCH } from "./api/ApI";
import s from "./app.module.css";
import { MovieDetail } from "./components/Movie-detail/Movie_detail";
import { Logo } from "./components/logo-container/logo";
import img from "./assets/download.png";
import { IMAGE_URL } from "./config";
import { MovieList } from "./components/Movie-List/Movie_List";
import { SearchBar } from "./components/Search-bar/Search_bar";



// const JOKE_URL = "https://v2.jokeapi.dev/joke/Any";
// const url = "https://api.themoviedb.org/3/discover/tv?api_key=c825777226dd9684e3f92b1d08ea0d9f&sort_by=popularity.desc";
export function App(){
    const [index,setIndex] = useState(Math.floor(Math.random()*20));
    const [currentMovie,setcurrentMovie] = useState("");
    const [recommended,setRecommended] = useState([]);

    async function getData(){
        try {
            const popularMovies = await API_FETCH.getPopular();
            setcurrentMovie(popularMovies[index]);
        } catch (error) {
            console.error(error);
            alert(error)
        }
    }

    async function getRecommended(movie_id){
        try {
            const recommendedMovies = await API_FETCH.getRecommendation(movie_id);
            setRecommended(recommendedMovies);
        } catch (error) {
            console.error(error);
            alert(error)
        }
    }

    async function getBySearch(title){
        try {
            const data = await API_FETCH.getByTitle(title);
            if (data.length > 0) {
                setcurrentMovie(data[0])
            }
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    
    useEffect(()=>{
        getData();
    },[]);

    useEffect(()=>{
        if (currentMovie) {
            getRecommended(currentMovie.id);
        }
    },[currentMovie]);

    
    
    return(
        <div className={s.main_container} style={{background: currentMovie ? 
                                                            `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("${IMAGE_URL}${currentMovie.backdrop_path}") no-repeat center / cover `
                                                            :`black`}}>
            <div className={s.header}>
                <div className={"row center"}>
                    <div className="col-4 logo-container">
                        <Logo img={img} title={"W.W - Movie"} subtitle={"find and watch your favorite movie "}/>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <SearchBar search={getBySearch}/>
                    </div>
                </div>
                
            </div>

            <div className={s.detail}>
                <MovieDetail currentMovie={currentMovie}/>
            </div>

            <div className={s.third}>
                {recommended && <MovieList recommended={recommended} onclick={(selected)=>{
                    setcurrentMovie(selected);
                }}/>} 
                
            </div>
        </div>
    )
    

}
