import React from "react";
import SearchBar from "./SearchBar";

const Middle = () => (
    <div className="middle">
        <div className="middle-1">
            <img className="logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Logo Google" />
        </div>

        <div className="middle-2">
            <SearchBar />
            <div className="middle-buttons">
                <button>Pesquisa Google</button>
                <button>Estou com sorte</button>
            </div>
        </div>
    </div>
);

export default Middle;