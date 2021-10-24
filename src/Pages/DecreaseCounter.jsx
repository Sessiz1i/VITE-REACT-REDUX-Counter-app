import React from 'react'
import {Button} from "react-bootstrap"
import {useDispatch} from "react-redux";
import {decrement} from "../Features/Counter/counterSlice";

export default function DecreaseCounter() {
    const dispatch = useDispatch()
    return (
        <div>
            <Button onClick={() => dispatch(decrement(Number(1)))}
                    className="btn-danger">Counter -</Button>
        </div>
    )
}