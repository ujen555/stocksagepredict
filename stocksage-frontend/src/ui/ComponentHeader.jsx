import React from 'react'

function ComponentHeader({title,children}) {
  return (
    <div className='componentHeader'>
        <h2 className="componentTitle">
            {title}
        </h2>
        {children}
    </div>
  )
}

export default ComponentHeader