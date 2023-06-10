import { graphQLRequest } from "./graphql"

export const getStickers = async () => {
    const { data } = await graphQLRequest(`query getImage {
  stickersEntries {
    ... on stickers_default_Entry {
      id
      title
      name: nameSticker
      settings: settingsSticker
      color: stickerColorway
      shape: stickerShape
      fill: stickerFill
    }
  }
}`);
    return data.stickersEntries;
}
