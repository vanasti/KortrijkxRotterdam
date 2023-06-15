import { graphQLRequest } from "./graphql"

const sendDataToServer = async (fd) => {
  let data;
  const url = "https://tibovanassche.be/uploadvids/upload.php"; 
  try {
    data = await fetch(url, {
      method: 'POST',
      body: fd
      });
  } catch (error) {
  console.log('There was an error', error);
  }
  
  if (data?.ok) {
    console.log(data); 
    // const result = await data.json();
    // console.log(result);
} else {
  console.log(`HTTP Response Code: ${data?.status}`)
}
}

export const addAsset = (blob) => {
  console.log(blob);
  const fd = new FormData();
  fd.append('blob', blob, 'recording.webm');
  const randomString = (Math.round(Math.random() * 10000)).toString();
  localStorage.setItem('randomNumber', randomString);
  fd.append('name', randomString);
  sendDataToServer(fd);
}


export const submitVideo = async () => {
  const randomString = localStorage.getItem("randomNumber");
  const variables = {
    "title": `${randomString}-video`,
    "video": `https://tibovanassche.be/uploadvids/vids/video${randomString}.webm`,
    "slug": randomString
  }
  console.log(variables);
  const { data } = await graphQLRequest(`mutation MyMutation($title: String, $video: String, $slug: String) {
  save_videos_default_Entry(title: $title, video: $video, slug: $slug, authorId:"1") {
    id
    title
    video
  }
}
`, variables); 
  
  console.log(data);
  return data;
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