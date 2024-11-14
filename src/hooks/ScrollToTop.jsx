import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { search } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [search]);

    return null;
}


export default ScrollToTop;