import client from "./client";

export const upLoadFile = async (data) => {
  try {
    const response = await client.post("/files/upload", data);
    return response;
  } catch (error) {
    console.log("error", error);

    console.error("Failed", error);
    throw error;
  }
};
export const getFileList = async (data) => {
  try {
    const response = await client.get("/files", data);
    return response;
  } catch (error) {
    console.log("error", error);

    console.error("Failed", error);
    throw error;
  }
};

