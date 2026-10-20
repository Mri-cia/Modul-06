import { Children } from "react";

export default function Panel({judul, children }){
    return(
        <div>
            {judul ?? <h2>{judul}</h2>}
            {children}
        </div>
    )
}