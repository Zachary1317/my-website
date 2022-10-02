import {React} from "react";
import './mainPage.css'
import personalImg from "../assets/personal.jpeg"

const MainPage = () => {

// mouse circle

const mouseCircleFunc = (x,y)=>{
    const mouseCircle = document.querySelector('.mouse-circle');
    const mouseDot = document.querySelector('.mouse-dot');
    mouseCircle.style.cssText = `top:${y}px;left:${x}px;opacity:1`;
    mouseDot.style.cssText = `top:${y}px;left:${x}px;opacity:1`;
}

document.body.addEventListener("mousemove",(e)=>{
    let x = e.clientX;
    let y = e.clientY;
    mouseCircleFunc(x,y);
    animateCircles(e,x,y);
});

document.body.addEventListener("mouseleave",()=>{
    const mouseCircle = document.querySelector('.mouse-circle');
    const mouseDot = document.querySelector('.mouse-dot');
    mouseCircle.style.cssText = `opacity:0`;
    mouseDot.style.opacity = '0';
})
// end of mouse circle

// menu
document.addEventListener("scroll",()=>{
    const navbar = document.querySelector(".navbar")
    const menu = document.getElementById("menu-icon")
    navbar.classList.add("hidden-nav");
    menu.classList.add("show-menu");
    menu.addEventListener("click",()=>{
        navbar.classList.remove("hidden-nav");
        menu.classList.remove("show-menu");
    })


    if(window.scrollY === 0){
        navbar.classList.remove("hidden-nav");
        menu.classList.remove("show-menu");
    }
})


// end of menu


// Animated circles

let mX = 0;
let mY = 0;

var animateCircles = (e,x,y) =>{
    const mainImg = document.querySelector('.main-circle img');
    if(x<mX){
        mainImg.style.left = `100px`;
    }else if(x>mX){
        mainImg.style.left = '-100px';
    }

    if(y<mY){
        mainImg.style.top = '100px';
    }else if(y>mY){
        mainImg.style.top = '-100px';
    }

    mX = e.clientX;
    mY = e.clientY;
}
// end of Animated circles


    const handleProjectButtonClick = (event)=>{
            event.preventDefault();
            const serviceText = document.getElementById("service-content-1")
            const upArrow = document.getElementById("upArrow-1")
            const downArrow = document.getElementById("downArrow-1")
            serviceText.classList.toggle("change");
            upArrow.classList.toggle("changeUpArrow");
            downArrow.classList.toggle("changeDownArrow");
    }
    const handleEducationButtonClick = (event)=>{
            event.preventDefault();
            const serviceText = document.getElementById("service-content-2")
            const upArrow = document.getElementById("upArrow-2")
            const downArrow = document.getElementById("downArrow-2")
            serviceText.classList.toggle("change");
            upArrow.classList.toggle("changeUpArrow");
            downArrow.classList.toggle("changeDownArrow");
    }
    const handleWorkButtonClick = (event)=>{
            event.preventDefault();
            const serviceText = document.getElementById("service-content-3")
            const upArrow = document.getElementById("upArrow-3")
            const downArrow = document.getElementById("downArrow-3")
            serviceText.classList.toggle("change");
            upArrow.classList.toggle("changeUpArrow");
            downArrow.classList.toggle("changeDownArrow");
    }


  return (
    <body>
        <div className="container">
            {/* mouse circle */}
            <div className="mouse-circle"></div>
            <div className="mouse-dot"></div>
            {/* end of mouse circle */}
            <div className="page-bg"></div>

            {/* Nav */}
            <div className="menu-icon center" id="menu-icon">
                <div className="menu-icon-line"></div>
                <div className="menu-icon-line"></div>
                <div className="menu-icon-line"></div>
            </div>
            {/* end of Nav */}

            {/* Navbar */}
            <div className="navbar">
                <a href="#section-1" class="navbar-link">Home</a>
                <a href="#section-2" class="navbar-link">About Me</a>
                <a href="#section-3" class="navbar-link">Experience</a>
                <a href="#section-4" class="navbar-link">Contact Me</a>
            </div>
              {/* end of Navbar */}

            {/* Section1 */}
            <section className="section-1 center" id="section-1">
                {/* logo */}
                <a href="/#" className="logo">Zachary Zhao</a>
                {/* end of logo */}
                {/* main circle */}
                <div className="main-circle">
                    <img src={personalImg} alt="" />
                </div>
                <div className="self_intro">Hi, I'm<br/>Zachary!</div>
                {/* end of main circle */}
      
                {/* featured text */}
                <div className="featured-text-container">
                    <h4 className="featured-text featured-text-1">Creativity</h4>
                    <h4 className="featured-text featured-text-2">Learning</h4>
                </div>
                {/* end of featured text */}
            </section>
            {/* Enf of Section1 */}

            {/* section2 */}
            <section className="section-2" id="section-2">
                {/* section2 heading */}
                    <h1 className="section-heading-2">Who I am</h1>
                {/* end of section2 heading */}

                {/* About Me text */}
                <p className="about-me-text">
                    <span>I'm Zachary,</span> currently a Master student in Information Technology at the University of Melbourne.<br/>
                    <span>As a student,</span> I take all my courses seriously and have a good foundation of IT knowledge.<br/>
                    <span>As a developer,</span> I am a quick learner. I embrace new knowledge and actively translate it into my working abilities.<br/>
                    <span>As a team player,</span> I am good at communication and can work efficiently with colleagues.<br/>
                    <span>As a runner,</span> I run at least 10km a week, I love sports and believe that a healthy body is the foundation of everything.<br/>
                </p>
                {/* end of About Me text */}
            </section>
            {/* end of section2 */}

            {/* section3 */}
            <section className="section-3" id="section-3">
                {/* section heading */}
                <h1 className="section-heading-3">Experience</h1>
                {/* end of section heading */}
                 {/* Service */}
                <div className="service-wrapper">
                    <div className="service">
                    <a href="/#" className="service-btn" onClick={handleProjectButtonClick}>
                        <span>
                        Projects
                        </span>
                        <span className="upArrow" id="upArrow-1">↑</span>
                        <span className="downArrow" id="downArrow-1">↓</span>
                    </a>
                    <div className="service-content" id="service-content-1">
                        <div className="project-container">
                        <p className="title">Personal Website | </p>
                        <p className="position">Front-end developer</p>
                        <p className="time">August  2022 - Present</p>
                        <p className="body">The website you are currently visiting is built by myself from scratch with  HTML, CSS and JavaScript. I have been updating it continuously with new knowledge that I have learned. Now I am trying to reconstruct it with React.</p>
                        <a href="https://github.com/Zachary1317/Personal-website">→Github</a>
                        </div>
                        <div className="project-container">
                        <p className="title">Hozez | </p>
                        <p className="position">Full-stack developer</p>
                        <p className="time">August 2022 - Present</p>
                        <p className="body">Hozez is a property trading platform being built. We form an Agile team of ten people and expect to complete the project within three months. I am responsible for the user information management function. Here is the backend demo I built with Spring boot, Docker and Postgres, which implements the  CRUD operations of User info.
                        </p>
                        <a href="https://github.com/Zachary1317/Houzez-backend-demo">→Github</a>
                        </div>
                        <div className="project-container">
                        <p className="title">PetSitter | </p>
                        <p className="position">Front-end developer</p>
                        <p className="time">September 2022 - Present</p>
                        <p className="body">PetSitter is a mobile app that allows users to foster and adopt pets. We formed a team of four and planned to complete the project within a month. I am responsible for the development of the front end for user registration and user information display. Now I have completed the design of the UI interface with Figma and the development of some pages with React native.
                        </p>
                        <a href="https://github.com/Zachary1317/PetSitter">→Github</a>
                        </div>
                    </div>
                    </div>
                    <div className="service">
                    <a href="/#" className="service-btn" onClick={handleEducationButtonClick}>
                        <span>
                        Education
                        </span>
                        <span className="upArrow" id="upArrow-2">↑</span>
                        <span className="downArrow" id="downArrow-2">↓</span>
                    </a>
                    <div className="service-content" id="service-content-2">
                        <div className="project-container">
                        <p className="title">University of Melbourne | </p>
                        <p className="position">Master</p>
                        <p className="time">March 2021 - Present</p>
                        <p className="body">
                            Major: Information Technology<br/>
                            Major Courses: Java, Algorithms, Internet Technologies, Database System<br/>
                            Award: 2021 Melbourne Graduate Scholarship(10000$)<br/>
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="service">
                    <a href="/#" className="service-btn" onClick={handleWorkButtonClick}>
                        <span>
                        Working Experience
                        </span>
                        <span className="upArrow" id="upArrow-3">↑</span>
                        <span className="downArrow" id="downArrow-3">↓</span>
                    </a>
                    <div className="service-content" id="service-content-3">
                        <div className="project-container">
                        <p className="title">Lufax, Shanghai, China | </p>
                        <p className="position">Product manager intern</p>
                        <p className="time">September 2021 - December 2021</p>
                        <p className="body">
                            Lufax Holding Ltd is a personal financial services platform in China. During the four months of the internship, I was responsible for the design of the communication function of the Lufax App and managing the development process in an Agile team.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end of Service */}
            </section>
            {/* end of section3 */}
            {/* Section4 */}
            <section class="section-4 center" id="section-4">
                {/* Section heading */}
                <h1 class="section-heading-4">
                    Contact Me
                </h1>
                <div class="contact-board">
                    <div class="contact-info-container">
                    <div class="info">Email: zachary.zhao7@gmail.com</div>
                    <div class="info">LinkedIn: 
                    <a href="https://www.linkedin.com/in/zachary-zhao-3017171a2/">Zachary Zhao</a> 
                    </div>
                    <div class="info">Github: 
                    <a href="https://github.com/Zachary1317">Zachary1317</a> 
                    </div>
                    </div>
                </div>
            </section>
            {/* end of Section5 */}
        </div>
    </body>
  );
}

export default MainPage;