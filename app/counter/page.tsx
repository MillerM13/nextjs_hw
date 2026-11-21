"use client";

import { useState } from "react";

function CountButton({ step, color }) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((previous) => {
            const next = previous + step;
            return next > 10 ? 0 : next;
        });
    }

    return (
        <>
            <button
                onClick={handleClick}
                style={{ backgroundColor: color, color: "white", padding: "8px 16px"}}
            >
                +{step}
            </button>
            <div>{count}</div>
        </>
    );
}

export default function Page() {
    return (
        <>
            <h1>JSX: The process</h1>
            <CountButton step={1} color="steelBlue"/>
            <CountButton step={2} color="tomato"/>
        </>
    );
}

