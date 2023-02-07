import React, { useState } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";
import { log } from "console";

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined);
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState("hw9-date", Date.now())));
    const [show, setShow] = useState<boolean>(false);

    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        setTimerId(+setInterval(() => setDate(new Date()), 1000));
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    };

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        clearInterval(timerId);
        setTimerId(undefined);
    };

    const onMouseEnter = () => {
        setShow(true)
        // пишут студенты // показать дату если наведена мышка
    };
    const onMouseLeave = () => {
        // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    };

    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    const stringTime = `${hours}:${minutes}:${seconds}` || <br />; // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты

    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    let year = date.getFullYear();
    const stringDate = `${day}.${month}.${year}` || <br />; // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    let now = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const stringDay = days[now.getDay()] || <br />; // пишут студенты

    let months = [
        "January",
        "February",
        "Match",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "November",
        "December"
    ];
    const stringMonth = months[date.getMonth()] || <br />; // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={"hw9-watch"}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={"hw9-day"}>{stringDay}</span>,{" "}
                <span id={"hw9-time"}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={"hw9-more"}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={"hw9-month"}>{stringMonth}</span>,{" "}
                            <span id={"hw9-date"}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br />
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={"hw9-button-start"}
                    disabled={timerId ? true : false} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={"hw9-button-stop"}
                    disabled={timerId ? false : true} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    );
}

export default Clock;
