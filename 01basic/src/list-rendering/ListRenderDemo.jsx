import React from 'react'

function ListRenderDemo() {
    const numberList = [1,2,3,4,5];

  return (
    <>
      {
        numberList.map((num, idx) => <p key={idx}>{num}</p>)
      }
    </>
  )
}

export default ListRenderDemo
/**
 * A key is a special list attribute which we use while creating the list.
 * Keys help React identify which items changed or added or removed.
 * It helps in efficient update of the UI
 * 
 * When to used index as key?
 * When the list does not have any unique id.
 * 
 * Note: using index as key is not recommended.
 */