import React from 'react'

function ListRenderDemo() {
    const numberList = [1,2,3,4,5];

  return (
    <>
      {
        numberList.map((num, i) => <p key={i}>{num}</p>)
      }
    </>
  )
}

export default ListRenderDemo
