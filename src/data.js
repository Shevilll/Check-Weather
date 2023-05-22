import { useState } from "react";
import { useEffect } from "react";
import { maindata } from "./main";

export function Getdata({ URL }) {
    const [text, setText] = useState("");
    const [err, setErr] = useState("");
    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    setErr(data.error.message);
                } else {
                    setErr("");
                    setText([
                        data.location.name,
                        data.current.condition.text,
                        data.current.condition.icon,
                    ]);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [URL]);
    if (err === "Parameter q is missing.") {
        return <h1>Enter Location.</h1>;
    } else if (err === "No matching location found.") {
        return <h1>{err}</h1>;
    } else if (!text) {
        return <h1>Searching...</h1>;
    }
    return maindata(text);
}
