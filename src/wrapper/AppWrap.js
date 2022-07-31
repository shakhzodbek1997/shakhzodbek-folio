import React from "react";
import {NavaigationDots, SocialMedia} from '../components'

const AppWrap = (Component, idName, classNames) => function HOC(){
    return (
        <div 
            id={idName}
            className={`app__container ${classNames}`}
        >
            <SocialMedia/>

            <div className="app__wrapper app__flex">
                <Component />

                <div className="copyright">
                    <p className="p-text">@2022 Shakhzodbek</p>
                    <p className="p-text">All rights reserved</p>
                </div>
            </div>

            <NavaigationDots active={idName}/>
        </div>
    )
}


export default AppWrap;