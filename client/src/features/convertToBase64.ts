import { ChangeEvent } from "react";

export const convertToBase64 = async (event: ChangeEvent) => {
  const input = event.target as HTMLInputElement;

  if (!input.files?.length) {
    console.error('Input files length is 0');
    return;
  }

  console.log(input.files);
  const reader = new FileReader();
  reader.readAsDataURL(input.files[0]);

  reader.onload = () => {
    // TODO: доделать функционал загрузки изображений
  };

  reader.onerror = (error) => {
    console.log(`Error: ${error}`);
  }
}