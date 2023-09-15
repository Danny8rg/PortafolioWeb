import { useEffect } from 'react'
import './content.css'
import Cards from '../../DataModels/Elements'

function Content (){
    useEffect (() => {
        cardsGenerator()
    });
    return (
        <>
        <div id ='ImagesBox'>

        </div>
        </>
    )

    function targetcreator(title, imgurl) {
        const box = document.getElementById('ImagesBox')

        const target = document.createElement('div')
        target.className = 'thiscard'

        const titleElement = document.createElement('p')
        titleElement.textContent = title
        titleElement.className = 'titles' 

        const imageElement = document.createElement('img')
        imageElement.className = 'imagesElements'
        imageElement.src = imgurl

        target.appendChild(titleElement)
        target.appendChild(imageElement)
        box.appendChild(target)
    }

    function cardsGenerator (){
        let num = 0;
        for (let i=0; i< 3; i++){
            num = Math.floor(Math.random() * 5); 
            targetcreator(Cards[num].title, Cards[num].imgurl)
        }
    }
}

export default Content
