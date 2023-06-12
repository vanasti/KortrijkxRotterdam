import { useNavigate } from "react-router";
import Statement from "../components/text/Statement";
import { useEffect } from "react";



const End = () => {
    const navigate = useNavigate();

    useEffect(() => {
    setTimeout(() => {
      navigate('/home', { replace: true });
    }, 7500);
  }, []);


    return (
        <>
            <Statement  
                content="Here comes the header for the end page"            
            />
            
            <p>The END!</p>
        </>
    )
}

export default End;
