import { useNavigate } from "react-router";
import Statement from "../components/text/Statement";
import { useEffect } from "react";



const End = () => {
    const navigate = useNavigate();
    useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 7000);
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
