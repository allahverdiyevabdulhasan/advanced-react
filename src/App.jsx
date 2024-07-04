import { useState } from 'react'

function App() {
  //Jsx kodlari ucun 
  // javascript kodlari ucun
 let a=[
  '1',
  '2',
  '3',
 ]
  return (
    //html kodlari icin
    <>
      <div>
        {
      a.map((num,index)=>
      <div style={{
backgroundColor:'red',
border:'1px soldi blue'
      }} key={index}>
        {num}
      </div>)
      }
      </div>
     
    </>
  )
}

export default App
