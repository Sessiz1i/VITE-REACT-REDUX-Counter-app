import React from 'react'
import {useSelector} from "react-redux";

export default function Counter(){
    const count = useSelector(state =>state.counter.value)
    return(
        <div>
            <h1 className={"pb-2 display-2 fw-bold"}>{count}</h1>
        </div>
    )
}
