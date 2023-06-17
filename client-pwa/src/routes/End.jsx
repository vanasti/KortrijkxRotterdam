import { useLoaderData, useNavigate } from "react-router";
import Statement from "../components/text/Statement";
import { useEffect } from "react";
import { getPreset } from "../js/stickers";

export const loader = async () => {
  const currentSticker = JSON.parse(localStorage.getItem("settings"));
  console.log(currentSticker);
  const presetSticker = await getPreset(3, currentSticker);
  return { presetSticker }
}

const End = () => {
  const navigate = useNavigate();
  const { presetSticker } = useLoaderData();
  let url = null;
  if (presetSticker && presetSticker.stickerImage[0]) {
    url = presetSticker.stickerImage[0].url
  }
    useEffect(() => {
    // setTimeout(() => {
    //   navigate('/', { replace: true });
    // }, 7000);
  }, []);


    return (
        <>
            <Statement
                variant={false}
                lineOne={{
                    partOne: {
                        content: "DANKJEWEL",
                        big: false
                    }, 
                    partTwo: {
                        content: "VOOR",
                        big: false
                    },
                }}
                lineTwo={{
                    partOne: {
                        content: "HET GEVEN",
                        big: false
                    }, 
                    partTwo: {
                        content: "VAN",
                        big: false
                    },
                }}
                lineThree={{
                    partOne: {
                        content: "JOUW",
                        big: true
                    }, 
                    partTwo: {
                        content: "MENING",
                        big: true
                    },
                }}
          />
          <div className="end__extra__container">
          {url ? (<img className="end__image" src={url}></img>) : (<div className="error__bubble error__bubble--end"><p>?</p><p>Something went wrong while loading this sticker..</p></div>)}
          <p className="explain__text">Kleef jouw sticker op de Budabrug zodat anderen jouw mening kunnen zien of kies zelf waar!</p>
        </div>
        
                    
        
        </>
    )
}

export default End;
