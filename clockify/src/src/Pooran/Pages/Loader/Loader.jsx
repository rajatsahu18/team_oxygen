import React from "react";

import styles from "./Loader.module.css"


export const Loader = ()=>{

    return(
        <div className={styles.loader}>
               <h3 style={{textAlign:"center",marginTop:"35%"}}>Loading</h3>
        </div>
    )
}

