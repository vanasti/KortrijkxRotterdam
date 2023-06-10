import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { graphQLRequest } from './js/graphql';


const request = async () => {
  const { data: { stickersEntries } } = await graphQLRequest(`query getImage {
  presetstickersEntries {
    ... on presetstickers_default_Entry {
      id
      stickerColorway
      stickerFill
      stickerImage {
        url
      }
    }
  }
}
`);
  console.log(stickersEntries[0]);
  return data;
}

request();

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
