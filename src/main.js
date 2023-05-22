export function maindata(text) {
    return (
        <>
            <h1>{text[0]}</h1>
            <h1>{text[1]}</h1>
            <img src={text[2]} />
        </>
    );
}
