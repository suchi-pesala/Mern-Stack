import styles from './styles.module.css'
function Test(){
    return(
        <>
            <div className={styles.topbar}>
                <div>
                    Meta <span className={styles.blog}>Blog</span>
                </div>
                <div className={styles.second_child}>
                    <div className={styles.sub_child}>home</div>
                    <div className={styles.sub_child}>Blog</div>
                    <div className={styles.sub_child}>SinglePost</div>
                    <div className={styles.sub_child}>Pages</div>
                    <div className={styles.sub_child}>Contact</div>
                </div>
                <div className={styles.search_container}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Search..."
                    />
                    <span className={styles.search_icon}>&#128269;</span>
                </div>
            </div>
        </>
    )
}
export default Test;