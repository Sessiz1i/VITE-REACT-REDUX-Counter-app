import React from 'react'
import {Button} from "react-bootstrap"
import {useDispatch} from "react-redux";
import {increment} from "../Features/Counter/counterSlice";

export default function IncreaseCounter() {
    const dispatch = useDispatch()
    return (
        <div>
            <Button onClick={() => dispatch(increment(Number(1)))}
                    className="btn-success">Counter +</Button>
        </div>
    )
}

