import React from 'react'
import { PacmanLoader } from "react-spinners";
import "../insidethremovie/inside.css"
const Loader = () => {
  return (
    <div>
              <div className="load">
          < loader />
            <PacmanLoader
        color='yellow'
        className="lolo"
        size={90}
        aria-label="Loading Spinner"
        data-testid="loader"
       
              />
               
              {/* < Movies /> */}
          </div>
          
    </div>
  )
}

export default Loader
