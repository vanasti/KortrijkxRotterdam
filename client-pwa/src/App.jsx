import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { graphQLRequest } from './js/graphql';

const request = async () => {
 const { data } = await graphQLRequest(`query MyQuery {
  stickersEntries {
    ... on stickers_default_Entry {
      id
      title
      person
      settings
    }
  }
}
`);
  console.log(data);
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
