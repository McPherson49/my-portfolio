
import "./portfolio.css";
import IMG1 from "../../assets/seniorImage.jpg";
import IMG2 from "../../assets/porf.png";
import IMG3 from "../../assets/vidapp.jpg";
import IMG4 from "../../assets/saveLives.jpg";
import IMG5 from "../../assets/employee.png";
import IMG6 from "../../assets/abc.svg";
import IMG7 from "../../assets/Screenshot 2023-02-07 222618.png";
import IMG8 from "../../assets/lightNG.png";
import IMG9 from "../../assets/fagopay.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Senior Serving Saints - A travel and immigration consultancy in Nigeria offering personalized visa services (study, work, family sponsorship) alongside tailored travel packages and support. Built with bootstrap and Php",
    github: "https://github.com/McPherson49/senior_saint",
    demo: "https://seniorserving.com.ng/"
  },
  {
    id: 2,
    image: IMG1,
    title: "Light NG - An online Nigerian utility platform under Gate Africa that enables users to buy prepaid and postpaid electricity units securely, manage payments, and access energy-related content and support",
    github: "",
    demo: "https://light.ng/"
  },
  {
    id: 3,
    image: IMG1,
    title: "Childville Centre (Childville Pre‑School) - A Nigerian early childhood education center focused on holistic development for children aged 2–12, offering engaging learning environments, safe play areas, and parent partnership.",
    github: "",
    demo: "https://www.childvillecentre.com/"
  },
  {
    id: 4,
    image: IMG1,
    title: "An Emergency Mobile App Built with Flutter",
    github: "https://github.com/Korex97/save_a_life",
    demo: ""
  },
  {
    id: 5,
    image: IMG1,
    title: "An Employee Management System built with SpringBoot(Java) and AngularJs",
    github: "https://github.com/Korex97/employeeMangementSystem",
    demo: ""
  },
  {
    id: 6,
    image: IMG1,
    title: "Cardify - A fintech platform that has three major system wallet, Exchange and Bills, worked mainly on the bills system . \n App available on both IOS and Android",
    github: "",
    demo: "https://app.cardify.co/"
  },
  {
    id: 7,
    image: IMG1,
    title: "Shortleters - A proptech system that deals with the booking, letting of shortlets apartments",
    github: "",
    demo: "https://app.shortleters.com/"
  },
  {
    id: 8,
    image: IMG1,
    title: "LightNG - A fintech system that helps user purchase their electricity bill and manages payment for electricity",
    github: "",
    demo: "https://light.ng/"
  },
  {
    id: 9,
    image: IMG1,
    title: "Fagopay - A fintech application that provides quasi-banking services for individuals and digital payment solutions for businesses and organisations in Nigeria and the rest of Africa. \n App available on both IOS and Android",
    github: "",
    demo: "https://fagopay.net/"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt="image1" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  {
                    github === ""? (
                      <a className='btn' href="#" target="_blank" rel="noreferrer">Private Repo</a>
                    ):(
                      <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                    )
                  }

                  {
                    demo.toLowerCase() === ""?(
                      <button  className='btn btn-primary'>Not yet Deployed</button>
                    ):(
                      <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                    )
                  }
                </div> 
              </article>
            )
          })
        }
      </div>

      
    </section>
  )
}

export default Portfolio
