import React, { useEffect } from "react";
import { useState } from "react";
import "./Temp.css";
import Weather from "../Weather/Weather";

const Temp = () => {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const time = currentDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });
    const [search, setSearch] = useState("Kolkata");
    // we store json inside the city
    const [city, setcity] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=ab76932312499d65cae39a0953e6285e`;
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            setcity(resJson.main);
        };

        fetchApi();
    }, [search]);

    const weather = "cloudy";
    return (
        <div className="container">
            <div className="box">
                <div className="wave1"></div>
                <div className="wave2"></div>
                <div className="wave3"></div>
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {!city ? (
                    <>
                        <h1 style={{ paddingTop: "8rem", paddingLeft: "6rem", paddingRight: "6rem", paddingBottom: "1rem", textalign: "center" }}>
                            No data found
                        </h1>
                        <p style={{color: "#808080"}}>please enter a valid city name</p>
                    </>
                ) : (
                    <>
                        <div id="weathercon">
                            <i
                                className="fas fa-sun"
                                style={{ color: "#eccc68" }}
                            ></i>
                            <h2>Sunny</h2>
                        </div>
                        <div className="info">
                            <div className="location">
                                <i className="fa-solid fa-street-view"></i>
                                <h2>{search}</h2>
                            </div>
                            <p id="date">
                                {date} | {time}AM
                            </p>
                            <h1 className="temp">{city.temp}°Cel</h1>
                            <h3 className="tempmin-max">
                                Min : {city.temp_min}°Cel | Max :{city.temp_max}°Cel
                            </h3>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Temp;
