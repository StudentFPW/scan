import React from "react";

export default function Header() {
    return (
        <header className="frame">
            <img
                className="SGN"
                alt="Sgn"
                src="https://c.animaapp.com/p2Qtp7t2/img/sgn-09-24-2022-1663968217400-1@2x.png"
            />
            <div className="group">
                <div className="text-wrapper">Главная</div>
                <div className="div">Тарифы</div>
                <div className="text-wrapper-2">FAQ</div>
            </div>
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="text-wrapper-3">34</div>
                    <div className="text-wrapper-4">100</div>
                    <div className="text-wrapper-5">Использовано компаний</div>
                    <div className="text-wrapper-6">Лимит по компаниям</div>
                </div>
            </div>
            <div className="group-2">
                <div className="text-wrapper-7">Выйти</div>
                <p className="p">
                    <span className="span">Алексей А</span>
                    <span className="text-wrapper-8">. </span>
                </p>
                <img className="mask-group" alt="Mask group" src="https://c.animaapp.com/p2Qtp7t2/img/mask-group@2x.png" />
            </div>
        </header>
    );
};