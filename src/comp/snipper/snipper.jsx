import React from "react"
import "./snipper.css"

const WithSnipper = (WrappedCompnent) => ({isLoading, data}) => {
 return isLoading ? (
  <div className="snipperOverlay">
   <div className="snipperContainer"></div>
  </div>
 ) : (
  <WrappedCompnent data={data} />
 )
}

export default WithSnipper
