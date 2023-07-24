import {Search} from "react-bootstrap-icons";
import s from "./style.module.css"
export function SearchBar({search}){

    function submit(e){
        if (e.key === "Enter" && e.target.value.trim()!=="") {
            var query = e.target.value;
            search(query);
        }
    }
    return(
        <div>
            <Search size={18} className={s.icon}/>
            <input onKeyUp={submit} placeholder="Search your favorite movie .." className={s.search} style={{width:"100%"}} type="search" />
        </div>
    )
}