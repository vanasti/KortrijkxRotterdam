import { graphQLRequest } from "./graphql"




export const addAsset = async (video) => {
  console.log(video);
  // const { data } = await graphQLRequest(`mutation MyMutation($title: String, $url: String, $filename: String) {
  //       save_images_Asset(title: $title, _file: {url: $url, filename: $filename}) {
  //         id
  //         title
  //       }
  //     }`,
  //     {
  //       "title": "yes",
  //       "url": {video},
  //       "filename": "hello.png"
  //     }
  //   );
}


export const submitSticker = async (video) => {
  const stickerSettings = JSON.parse(localStorage.getItem('settings'));
  if (video) console.log(video);
  const { data } = await graphQLRequest(`mutation MyMutation($title:String, $color: String, $fill: String, $shape: String) {
  save_stickers_default_Entry(authorId: "1", slug: "-", title:$title, stickerColorway: $color, stickerFill:$fill, stickerShape:$shape) {
    id
    title
    stickerColorway
    stickerFill
    stickerShape
  }
}`, {
    "title": "user-made sticker",
    "shape": `shape${stickerSettings[0]}`,
    "fill": `fill${stickerSettings[1]}`,
    "color": `colorway${stickerSettings[2]}`,
  })
  console.log(data);
  return data;
}

export const getStickers = async () => {
    const { data } = await graphQLRequest(`query getImage {
  stickersEntries {
    ... on stickers_default_Entry {
      id
      title
      color: stickerColorway
      shape: stickerShape
      fill: stickerFill
    }
  }
}`);
    return data.stickersEntries;
}

export const getPreset = async (step, settings) => {
  const typeOfPreset = stepToPreset(step);
  const stickerVariables = createVariablesArray(typeOfPreset, settings); 

  const { data } = await graphQLRequest(`query getQuestion($type: [QueryArgument], $shape: [QueryArgument],$fill:[QueryArgument],$color:[QueryArgument]) {
  presetstickersEntries(stickerType: $type, stickerShape:$shape, stickerColorway:$color, stickerFill:$fill) {
    ... on presetstickers_default_Entry {
      id
      stickerImage {
        url
      }
    }
  }
}
`, stickerVariables);
  return data.presetstickersEntries[0];
}

const stepToPreset = (step) => {
  let typeOfPreset;
  if (step == 1) {
    typeOfPreset = "shape"
  } else if (step == 2) {
    typeOfPreset = "shapeAndFill"
  } else if (step == 3) {
    typeOfPreset = "full"
  }
  return typeOfPreset
}

const createVariablesArray = (typeOfPreset, settings) => {
  const stickerVariables = {
    "type": typeOfPreset,
    "shape": `shape${settings[0]}`,
  }

  if (settings[1]) {
    stickerVariables["fill"] = `fill${settings[1]}`;
  }

  if (settings[2]) {
    stickerVariables["color"] = `colorway${settings[2]}`;
  }
  return stickerVariables;
}