import React from 'react';
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {incrementByTwo} from "../Features/Counter/counterSlice";

export default function IncreaseByTwoCounter() {
    const dispatch = useDispatch()
    return (
        <div>
            <Button onClick={() => dispatch(incrementByTwo(Number(2)))}
                    className="btn-secondary">Counter +2</Button>
        </div>
    )
}