import Navbar from "./Navbar"

const Base = ({children}) => {
  return (
   <>
   <Navbar/>
     {children}
   </>
  )
}

export default Base