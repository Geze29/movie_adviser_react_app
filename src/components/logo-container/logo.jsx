import s from "./logo.module.css";

export function Logo({img,title,subtitle}){
    return(
        <div className={s.container}>
            <div className={s.img_title}>
                <img src={img} alt="logo" />
                <div>{title}</div>
            </div>
            <div className={s.subtitle}>{subtitle}</div>
        </div>
    )
}