import React, { useEffect } from "react"
import { useLocation }  from "react-router-dom"


// Scroll restoration
function ScrollToTop() {
    const { pathname } = useLocation()
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])
    return(null)
}

export {ScrollToTop}