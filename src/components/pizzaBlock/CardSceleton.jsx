import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = () => (
  <ContentLoader 
    className='pizza-block'
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="139" cy="135" r="113" /> 
    <rect x="41" y="319" rx="20" ry="20" width="209" height="71" /> 
    <rect x="39" y="417" rx="20" ry="20" width="68" height="22" /> 
    <rect x="144" y="409" rx="21" ry="21" width="102" height="39" /> 
    <rect x="0" y="285" rx="20" ry="20" width="270" height="0" /> 
    <rect x="43" y="275" rx="20" ry="20" width="201" height="25" />
  </ContentLoader>
)

export default Sceleton
