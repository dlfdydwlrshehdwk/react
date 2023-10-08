import { useEffect, useState } from 'react'
// 이미지태그를 쓸거면 img태그에서 경로를 지정하는게 아닌
// import 를 사용하던가 public에 이미지를 놓고 경로를 지정해야함 
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