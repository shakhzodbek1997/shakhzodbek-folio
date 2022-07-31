import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import './About.scss';
import { images } from "../../constants";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={images.me}
                        alt="Me"
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <h3><span>Name: </span> Yuldoshov Shakhzod</h3>
                <h3><span>Profile: </span> FULL STACK DEVELOPER </h3>
                <h3><span>Email: </span> shakhzodbek.yuldoshev@gmail.com </h3>
                <h3><span>Phone: </span> +48 575-829-114 </h3>
                
                <p className="a-desc">
                    I am a passionate middle Full Stack Developer
                    with strong knowledge and problem solving skills.
                    I have practical experience with front end technologies
                    like JavaScript, React.js, HTML, CSS, Sass 
                    along with backend and database technologies such as Java, 
                    Spring, Hibernate and PostgreSQL. 
                    You can find some of my projects below. If you want to 
                    know more about me, you can download my resume.
                </p>

                <a href="Shakhzod_CV.pdf" download="Shakhzod Yuldoshov's CV.pdf" className="pulsingButton">
                    Get Resume
                </a>

            </div>
        </div>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    "app__whitebg"
);