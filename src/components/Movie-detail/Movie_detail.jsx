
import s from "./style.module.css";
import { Rate } from "../rating/Rate";

export function MovieDetail({currentMovie}){
    return(
        <div>
            <p className={s.title}>Movie Title : {currentMovie.original_title}</p>

            <div style={{display:"flex"}}>
                <Rate rating={(currentMovie.vote_average)/2}/>
                <p style={{marginLeft:10}}>{(currentMovie.vote_average)/2}</p>
            </div>

            <div className={s.overview}>overview : {currentMovie.overview}</div>
            <p className={s.release_date}>Release date : {currentMovie.release_date}</p>
        </div>
    )
}