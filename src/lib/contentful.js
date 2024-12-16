import { createClient } from "contentful"

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export async function getAboutUsContent() {
  const response = await client.getEntries({ content_type: "homePage" });

  const data = response.items[0].fields;
  return data;
}

export async function getLayoutContent() {
  const response = await client.getEntries({ content_type: "layout" });

  const data = response.items[0].fields;
  console.log("data", data, "data")
  return data;
}