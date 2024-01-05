import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
// 이미지태그를 쓸거면 img태그에서 경로를 지정하는게 아닌
// import 를 사용하던가 public에 이미지를 놓고 경로를 지정해야함 
import img1 from '../../assets/images/item1.PNG'


function List (props) {
    let [star,setStar] = useState(0)
    useEffect(()=>{
        console.log(props)
    })

    return(
        <div className='list'>
            <div>
                <img src={img1}></img>
            </div>
            <div className='star'>
                <span>
                <FontAwesomeIcon icon={faStarHalf} style={{color: "#ffea00",}} />
                <FontAwesomeIcon icon={faStarHalf} flip="horizontal" style={{color: "#ffea00",}} />
                </span>
            </div>
            <div>{props.item.star}</div>
        </div>
    )
}

export default List