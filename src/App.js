import { useState } from "react";
import { useEffect } from "react";

const API_KEY = "254b27ccb17d46e5acb95049232205";
const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=India&aqi=yes`;

export default function App() {
    return <Getdata URL={URL} />;
}

function Getdata({ URL }) {
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
    if (!text) {
        if (err) {
            return <h1>{err}</h1>;
        }
        return <h1>Searching...</h1>;
    }
    return maindata(text);
}
function maindata(text) {
    return (
        <>
            <h1>{text[0]}</h1>
            <h1>{text[1]}</h1>
            <img src={text[2]} />
        </>
    );
}
