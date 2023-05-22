import { useState } from "react";
import { Getdata } from "./data";

export default function App() {
    const API_KEY = "254b27ccb17d46e5acb95049232205";
    const [search, setSearch] = useState("");
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}&aqi=yes`;
    return (
        <>
            <input type="search" onChange={(e) => setSearch(e.target.value)} />

            <Getdata URL={URL} />
        </>
    );
}
