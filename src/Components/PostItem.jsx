import styles from "../Components/Post.module.css"

export default function PostItem({title,id}){
    return(
        <div className={styles.box}>
            <p>{id}</p>
            <p>{title}</p>    
       </div>
    )
}