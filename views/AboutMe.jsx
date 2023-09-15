import Header from '../components/Header/Header'
import TheFooter from '../components/Footer/Footer'
import './AboutMe.css'

function AboutMe (){
    return (
        <>
        <Header />
        <div id='BigBox'>
        <div id="leftbox">
            <h1 id='titleh1'>Skills</h1>
            <p className="SkillsList">Basic English</p>
            <p className="SkillsList">Good model data </p>
            <p className="SkillsList">Good Communication</p>
            <p className="SkillsList">Basic Electronic Knowledges</p>

        </div>
        <div id="rightbox">
            <img src="../public/developer.jpg" alt="Programer Working" />
        </div>
        </div>
        <TheFooter />
        </>
    )
}

export default AboutMe