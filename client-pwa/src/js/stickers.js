import { graphQLRequest } from "./graphql"

export const getStickers = async () => {
    const { data } = await graphQLRequest(`query getImage {
  presetstickersEntries {
    ... on presetstickers_default_Entry {
      id
      stickerColorway
      stickerFill
      stickerImage {
        url
      }
      title
    }
  }
}`);
    return data;
}
