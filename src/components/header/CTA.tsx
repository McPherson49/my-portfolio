
import CV from "../../assets/PETER-ABIOLA-AFOLABI-Resume.pdf";

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn' href={CV} download>Download CV</a>
        <a className='btn btn-primary' href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA