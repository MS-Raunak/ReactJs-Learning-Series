import React, {useState, useCallback, useRef, useEffect } from 'react'

function PasswordGenerator() {
    const [length, setLength] = useState(0);
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")
    const passwordRef = useRef(null);

    //Password Generator Function/**usecallback() is used to memorize previous value, consist the value in cache, whenever any dependecy change it will reexecute*/
    const PasswordGenerator= useCallback(() => {
        let pass="";
        let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberAllowed) str+="0123456789";
        if(charAllowed) str+="!@#$%^&*-+{}[]~`";

        for (let index = 0; index <length; index++) {
            let char = Math.floor(Math.random()*str.length + 1);
            pass+=str.charAt(char); 
        }
        setPassword(pass)
        //console.log(password);
    }, [length, numberAllowed, charAllowed, setPassword])

    useEffect(()=>{
        PasswordGenerator();
    }, [length,charAllowed,numberAllowed,PasswordGenerator])

   
    const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current?.select()//pass length to copy
        window.navigator.clipboard.writeText(password);
    },[password])


    return (
        <>
            <div>
                <div className="w-full max-w-md max-auto text-orange-500 mx-auto  shadow-md rounded-lg px-4 my-8 bg-gray-700">
                    <h2 className='text-white text-center my-3'>Password Generator</h2>
                    <div className="flex shadow rounded-lg overflow-hidden mb-4">
                        <input 
                            type="text" className='outline-none w-full py-1 px-3' placeholder='password' readOnly 
                            value={password}
                            ref={passwordRef}
                        />
                        <button 
                        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' 
                        onClick={copyPasswordToClipboard}>copy</button>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <input 
                            type="range" min={6} max={25}  
                            className='cursor-pointer' 
                            onChange={(event) => setLength(event.target.value)}
                        />
                        <label>Length :{length} </label>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <input 
                            type="checkbox" id='numberInput' 
                            defaultChecked={numberAllowed}
                            onChange={() => {
                                setNumberAllowed((numPrev) => !numPrev) ;
                              }}
                        />
                        <label>Number</label>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <input 
                            type="checkbox" id='characterInput'
                            defaultChecked={charAllowed}
                            onChange={() => setCharAllowed((charPrev) => !charPrev)} />
                        <label htmlFor='characterInput'>Characters</label>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PasswordGenerator
