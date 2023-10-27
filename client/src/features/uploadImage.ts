import requests from "./requests";

export const uploadImage = async (url: string, body: string | ArrayBuffer | null) => {
  // TODO: доделать отправку изображения
  const testPost = {
    title: 'Test Image upload title',
    description: 'Test desc',
    text: `<img src='${body}'/>`,
  }

  try {
    console.log(testPost);
    const result = await requests.post(url, testPost);
    console.log(result?.headers);
    console.log(result?.json());
  } catch (error) {
    console.error(`Error post image in url ${url}.\n${error}`);
  }
}