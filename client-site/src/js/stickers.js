import { graphQLRequest } from "./graphql";

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

export const userToPreset = async (userStickers) => {
  let stickerImages = [];

  for (const sticker of userStickers) {
    const variables = {
      "type": "full",
      color: sticker.color,
      fill: sticker.fill,
      shape: sticker.shape,
    };

    const { data } = await graphQLRequest(`query getQuestion($type: [QueryArgument], $shape: [QueryArgument],$fill:[QueryArgument],$color:[QueryArgument]) {
  presetstickersEntries(stickerType: $type, stickerShape:$shape, stickerColorway:$color, stickerFill:$fill) {
    ... on presetstickers_default_Entry {
      id
      stickerImage {
        url
      }
    }
  }
}`, variables);
    if (data.presetstickersEntries[0]) {
      const image = data.presetstickersEntries[0].stickerImage[0].url;
      stickerImages.push(image);
    }
    
  }

  return stickerImages;
  
}

export const getLastVideo = async () => {
    console.log('check');
    const { data } = await graphQLRequest(`query MyQuery {
  videosEntries {
    ... on videos_default_Entry {
      id
      video
    }
  }
}`);
    console.log(data);
    const videoWithUrl = data.videosEntries.filter(item => item.video); 
    const lastVideo = videoWithUrl[0];
    return lastVideo.video
}