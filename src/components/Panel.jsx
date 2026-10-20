import { Children } from "react";

export default function Panel({ children }){
    return(
        <>
            {Children.map(children, child => 
                <div>
                    {child}
                </div>
            )}
        </>
    )
}