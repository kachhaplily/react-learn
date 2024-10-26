import React, { useCallback, useEffect, useState } from "react";
const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [isNumeric, setIsNumeric] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState("");



  //useCallback and generate password function

  const generatePassword = useCallback(() => {
    let pass = "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(isNumeric){
        str+="0123456789";
    }
    if(isCharacter){
        str+="!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, isNumeric, isCharacter,setPassword])


  //useEffect and generate password function
  useEffect(()=>{
    generatePassword();
  }, [length, isNumeric, isCharacter])   


  return (
    <>
      <div className="bg-slate-600">
        <h1 className="text-center">Password Generator</h1>
        <div className="flex align-middle justify-center p-2">
          <input
            type="text"
            value={password}
            className="w-96 h-10 from-orange-700"
          ></input>
        </div>
        <div className="flex align-middle justify-center p-2">
          <input type="range" min={5} max={100}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          ></input><span>{length}</span>

          <div className="flex align-middle justify-center p-2">
            <label>Include Numeric</label>
            <input
              type="checkbox"
              value={isNumeric}
              onChange={() => setIsNumeric((pre=>!pre))}
            ></input>
          </div>
          <div className="flex align-middle justify-center p-2">
            <label>Include Special Character</label>
            <input
              type="checkbox"
              value={isCharacter}
              onChange={() => setIsCharacter((pre=>!pre))}
            ></input>
            </div>
    
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
