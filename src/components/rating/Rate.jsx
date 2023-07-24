
import {StarFill,StarHalf,Star} from "react-bootstrap-icons";

export function Rate({rating}){
    
    var star = [];
    for(let i=1;i<=Math.floor(rating);i++){
        star.push(<StarFill key={"starFill"+i}/>)
    }
    if (Math.floor(rating)!=rating) {
        star.push(<StarHalf key={"starHalf"}/>)
    }

    for(let i=1;i<=(5-rating);i++){
        star.push(<Star key={"star"+i}/>)
    }
    return star;
   
}