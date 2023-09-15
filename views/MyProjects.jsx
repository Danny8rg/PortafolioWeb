import Header from '../components/Header/Header'
import TheFooter from '../components/Footer/Footer'
import './MyProjects.css'

function Projects (){
    return (
        <>
        <Header />
        <div id='contentprincipal'>
            <div id='leftBox'>
                <h1 className='TitlesProjects'> Guitar Store</h1>
                <img src="../public/GuitarStore.png" alt="guitarstore" className='img' />
            </div>
            <div id='RightBox'>
                <h2 className='TitlesProjects' > FreChocolate</h2>
                <img src="../public/freeChocolate.png" alt="freechocolate" className='img' />
            </div>

        </div>
        <TheFooter />
        </>
    )
}

export default Projects