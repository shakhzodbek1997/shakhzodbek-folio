import React from "react";
import {motion} from 'framer-motion';

import { AppWrap } from "../../wrapper";
import {images} from '../../constants';
import './Header.scss';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition={{ duration: 0.9 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span> 👋 </span>
                        <div style={{marginLeft: 20}}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Shakhzodbek</h1>
                        </div>
                    </div>

                    <div className="tag-cmp app__flex">
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Full Stack</div>
                                <div className="i-title-item">Web Developer</div>
                                <div className="i-title-item">Web Instructor</div>
                                <div className="i-title-item">Freelancer</div>
                                <div className="i-title-item">React, Redux</div>
                                <div className="i-title-item">Developer</div>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>



            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={images.profile} alt="profile_bg" />
                <motion.img
                    whileInView={{scale: [0, 1]}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                    className="overlay_circle "
                    src={images.circle}
                    alt="Profile__Circle image"
                />

            </motion.div>


            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.react, images.redux, images.sass].map((circle, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={circle} alt="circle" />
                    </div>
                ))}

            </motion.div>
        </div>
    )
}

export default AppWrap(Header, 'home');