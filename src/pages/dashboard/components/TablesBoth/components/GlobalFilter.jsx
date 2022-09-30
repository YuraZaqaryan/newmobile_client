import React from 'react'

const GlobalFilter = ({filter, setFIlter}) => {
  return (
    <div>
        Search: {" "}
        <input value={filter || ''} 
            onChange={e => setFIlter(e.target.value)}
        />
    </div>
  )
}

export default GlobalFilter