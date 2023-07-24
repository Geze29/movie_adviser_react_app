import {Item_LIST_IMG} from "../../config";
import s from "./style.module.css";
export function MovieListItem({onclick,current}){
    const onclick_ =()=>{
        onclick(current);
    }
    return(
        <div onClick={onclick_} className={s.container}>
            <img className={s.image} src={Item_LIST_IMG + current.backdrop_path} alt="Back Drop path" />
            <div className={s.title}>{current.original_title}</div>
        </div>
    )
}