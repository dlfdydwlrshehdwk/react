import { useEffect, useState } from 'react'
import img1 from '../../assets/images/item1.PNG'


function List () {
    let [star,setStar] = useState(0)

    useEffect(()=>{
        let star = document.querySelectorAll('.star > li');
        console.log(star)
        star.forEach((ele,idx) => {
            ele.addEventListener('click',function(){
                console.log(idx)
                setStar(idx + 1)
            })
        });
    })

    return(
        <div className='list'>
            <div>
                <img src={img1}></img>
            </div>
            <ul className='star'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div>{star}</div>
        </div>
    )
}

export default List