import React from 'react'

function BgChangerRandomly() {

    let intervalId;

    const colorGenerator = () => {
        let colorCode = "abcdef0123456789"
        let colorHexCode = '#';
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * 16)
            colorHexCode += colorCode[randomIndex];
        }
        return colorHexCode;
    }

    const startChangeBackgoundColor = () => {
        let colorHexCode = colorGenerator();
        document.body.style.backgroundColor = colorHexCode;
        isColor = colorHexCode;
    }

    const changeHandler = () => {
        if (intervalId==null) {
            intervalId = setInterval(startChangeBackgoundColor, 1000);
        }
    }

    const stopHandler = () => {
        clearInterval(intervalId);
        intervalId = null;
    }
    return (
        <>
            <button className='btn btn-primary m-3' onClick={changeHandler}>START BG-CHANGER</button>
            <button className='btn btn-danger' onClick={stopHandler}>STOP BG-CHANGER</button>
        </>
    )
}

export default BgChangerRandomly
