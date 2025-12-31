import React, { useEffect, useState } from 'react'


const TextChanger = () => {

    const texts = ["Hi I'm Aditya", "A Frontend Developer", ];
    const [currentText, setcurrentText] = useState("");
    const [endValue, setendValue] = useState(true);
    const [isForward, setisForward] = useState(true);
    const [index, setindex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setcurrentText(texts[index].substring(0, endValue));
        if(isForward){
          setendValue((prev) => prev + 1);

      }else{
        setendValue((prev) => prev - 1);
      }
    if(endValue > texts[index].length + 10){
      setisForward(false);
    }
       if(endValue <2.1){
            setisForward(true);
            setindex((prev) => prev&texts.length);
        }
        }, 70);
        
        return () => clearInterval(interval);
    },[endValue, isForward, index, texts]);

     
  return (
    <div className='transition ease duration-300 '>
      {currentText}
    </div>
  )
}

export default TextChanger
