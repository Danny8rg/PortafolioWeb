import './header.css'
const Header = () => {
return (
    <>
    <div id="bigbox">
    <h1 id="title">software developer</h1>
    <nav id='nav'>
        <a href="Projects" className='navoptions'>my projects</a>
        <a href="Contacts" className='navoptions'>contacts</a>
        <a href="AboutMe" className='navoptions'>about me</a>
        <a href="Tecnologys" className='navoptions'>tecnologys</a>
    </nav>
    </div>
    </>
)
}

export default Header
