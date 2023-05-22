export function maindata(text) {
    if (!text) {
        return <h1>Searching...</h1>;
    }
    const name = text.data.location.name;
    const country = text.data.location.country;
    const localtime = text.data.location.localtime;
    const region = text.data.location.region;
    const temp_c = text.data.current.temp_c;
    const temp_f = text.data.current.temp_f;
    const condition_text = text.data.current.condition.text;
    const condition_icon = text.data.current.condition.icon;
    const last_updated = text.data.current.last_updated;
    return (
        <>
            <div id="main">
                <h6 style={{ textAlign: "center" }}>
                    Last Updated: {last_updated}
                </h6>
                <div id="content">
                    <div id="info">
                        <h1>Name: {name}</h1>
                        <h4>Country Name: {country}</h4>
                        <h4>Region: {region}</h4>
                        <p>Local Date-Time: {localtime}</p>
                    </div>
                    <div id="weather">
                        <h1>{condition_text}</h1>
                        <h4>
                            Temp: {temp_c}˚ C || {temp_f}˚ F
                        </h4>
                        <img src={condition_icon} />
                    </div>
                </div>
            </div>
        </>
    );
}
export function handleError(err) {
    if (err === "Parameter q is missing.") {
        return <h1>...</h1>;
    } else if (err === "No matching location found.") {
        return <h1>{err}</h1>;
    }
}
