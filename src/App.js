import React from "react";
import Card from "./components/Card";
import data from "./data"
import NavBar from "./components/NavBar";
import './index.css'

export default function App() {
    const cards = data.map(item => {
        return(
            
            <Card 
                key = {item.id}
                item = {item}
            />
        )
    })
    return (
        <div>
            <NavBar />
            <div className="card-body">
                {cards}
            </div>
        </div>
    )
}