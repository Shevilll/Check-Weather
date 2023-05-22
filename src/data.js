import { useState } from "react";
import { useEffect } from "react";
import { maindata } from "./main";
import { handleError } from "./main";

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
                    setText({
                        data,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [URL]);
    if (err) {
        return handleError(err);
    }
    return maindata(text);
}
