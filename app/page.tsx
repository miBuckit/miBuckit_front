'use client'

import axios from 'axios'
import { Console } from 'console';

export default function Home() {
  
  const handleOnClick = () => {
    const url = "http://localhost:8080/test/axios";
    axios.get(url)
    .then((response) => {
        console.log(response.data)
        console.log("");
    })
    .catch((error) => {
        console.log("실패");
    })
  }

  return (  
    <div>
      <button onClick={handleOnClick}>
        api 테스트
      </button>
    </div>
  )
}
