import React from 'react'

const Ads = (props) => {
  return (
    <div className='col-md-3 mt-3'>
      <div className="card w-100 p-3">
  
      <img src="https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg" className="card-img-top w-100" alt="iPhone Image" style={{width:"100%"}}/>
      <div className="card-body">
    
        <h5 className="card-title">{props.name}</h5>
     
        <p className="card-text">Lag-free gaming and seamless multitasking: Segment’s 1st Dimensity 7400 Chipset (750k+ Antutu score)*</p>
       
 
      </div>
    </div>
    </div>
  )
}

export default Ads
