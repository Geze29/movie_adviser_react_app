import { MovieListItem } from "../Movie-list-item/Movie_list_item"
import s from "./style.module.css";
export function MovieList({recommended,onclick}){

    
    // console.log(recommended);
    return(
        <div>
            <div className={s.title}>
                You may probably Like :
            </div>
            <div className={s.list}>

            {
                recommended.map((rec)=>{
                    return(
                        <MovieListItem key={rec.original_title} current={rec} onclick={onclick}/>
                        )
                    })
                    
                }
            </div>
        </div>
    )
}