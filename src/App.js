import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [principle,setPrinciple] = useState(0);
  const [Interest,setInterest] = useState(0);
  const [year,setYear] = useState(0);
  const [result,setResult] = useState(0);
  const [isPrinciple,setisPrinciple] = useState(true);
  const [isinterest,setisInterest] = useState(true);
  const [isyear, setisYear] = useState(true);

  const calculateInterest = (e)=>{
    e.preventDefault();
    const result = (principle * Interest * year)/100
    setResult(result);
  }
  const handleReset = ()=>{
    setPrinciple(0);
    setInterest(0);
    setYear(0);
    setResult(0);
  }
  const validate = (e)=>{
    const {name, value} = e.target;
    if(name==='principlevalue'){
      setPrinciple(value);
      let res = (!!value.match(/^[0-9]+$/));
      console.log(res);
      if(res===true){
        setisPrinciple(true)
      }else{
        setisPrinciple(false)
      }
    }else if(name === 'interestValue'){
      setInterest(value);
      let res = (!!value.match(/^[0-9]+$/));
      if(res === true){
        setisInterest(true)
      }else{
        setisInterest(false)
      }
    }else if(name === 'numberYear'){
      setYear(value);
      let res = (!!value.match(/^[0-9]+$/));
      if(res==true){
        setisYear(true)
      }else{
        setisYear(false);
      }
    }


  }
  return (
    <>
    <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{height:"90vh"}}>
      <div className='bg-light p-5 rounded' style={{width:"500px"}}>
        <h1>Simple Interest</h1>
        <p>Calculate Your Interest Easily</p>
        <div style={{height:"150px"}} className='flex-column bg-warning rounded mt-3 d-flex justify-content-center align-items-center'>
        <h2>&#8377;{result}</h2>
        <p>Total Simple Interest</p>
        </div>
        <form action="" className='mt-3' onSubmit={calculateInterest}>

        <TextField className='w-100 mt-3' id="outlined-basic" label="&#8377; Principle Amount" variant="outlined" value={principle} 
        name='principlevalue'
        onChange={(e)=>validate(e)}/>
        {
          !isPrinciple && 
          <div>
            <p className='text-danger'>Invalid Input</p>
          </div>
        }

        <TextField className='w-100 mt-3' id="outlined-basic" label="Rate of Interest(p.a)%" variant="outlined" value={Interest}
        name='interestValue'
        onChange={(e)=>validate(e)}/>
        {
          !isinterest &&
          <div>
            <p className='text-danger'>Invalid Input</p>
          </div>
        }

        <TextField className='w-100 mt-3' id="outlined-basic" label="Year (Yr)" variant="outlined" value={year} 
        name='numberYear'
        onChange={(e)=>validate(e)}/>
        {
          !isyear &&
          <div>
            <p className='text-danger'>Invalid Input</p>
          </div>
        }

        <Stack direction="row" spacing={2} className='mt-5' style={{justifyContent:"space-between"}}>

        <Button disabled={isPrinciple && isinterest && isyear? false:true} variant="contained" style={{height:"50px",width:"200px", backgroundColor:"green"}} type='submit'>Calculate</Button>      

        <Button variant="contained" style={{height:"50px",width:"200px", backgroundColor:"blue"}} onClick={handleReset}>Reset</Button>
        </Stack>
        </form>
          </div>
        </div>
        </>
  );
}

export default App;
