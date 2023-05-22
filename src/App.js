import { useState } from "react";

let PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function App() {
    return (
        <>
            <FilterProducts Items={PRODUCTS} />
        </>
    );
}

function FilterProducts({ Items }) {
    let [Name, setName] = useState(
        Items.map((item, index) => (
            <tr key={index} style={checkStyle(item.stocked)}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
            </tr>
        ))
    );
    return (
        <div>
            <div>
                <form>
                    <input
                        type="search"
                        placeholder="Search"
                        onChange={(e) =>
                            searching(e.target.value, setName, Items)
                        }
                    />
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            onChange={(e) =>
                                checking(e.target.checked, setName, Items)
                            }
                        />{" "}
                        Only show products in stock.
                    </label>
                </form>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>{Name}</tbody>
            </table>
        </div>
    );
}

function checkStyle(check) {
    if (!check) {
        return { color: "red" };
    } else {
        return;
    }
}

function checking(e, setName, Items) {
    if (e === true) {
        setName(
            Items.filter((item) => item.stocked).map((item, index) => (
                <tr key={index} style={checkStyle(item.stocked)}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                </tr>
            ))
        );
    } else {
        setName(
            Items.map((item, index) => (
                <tr key={index} style={checkStyle(item.stocked)}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                </tr>
            ))
        );
    }
}
function searching(e, setName, Items) {
    if (e) {
        setName(
            Items.filter((item) =>
                item.name.toLowerCase().includes(e.toLowerCase())
            ).map((item, index) => (
                <tr key={index} style={checkStyle(item.stocked)}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                </tr>
            ))
        );
    } else {
        setName(
            Items.map((item, index) => (
                <tr key={index} style={checkStyle(item.stocked)}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                </tr>
            ))
        );
    }
}
