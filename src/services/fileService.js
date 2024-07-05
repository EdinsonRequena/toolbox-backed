import axios from "axios";

const API_KEY = process.env.API_KEY || "aSuperSecretKey";
const BASE_URL =
  process.env.BASE_URL || "https://echo-serv.tbxnet.com/v1/secret";

class FileService {
  async fetchFiles() {
    try {
      const response = await axios.get(`${BASE_URL}/files`, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      });
      return response.data.files;
    } catch (error) {
      throw new Error(`Error fetching file list: ${error.message}`);
    }
  }

  async fetchFileData(fileName) {
    try {
      const response = await axios.get(`${BASE_URL}/file/${fileName}`, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      });

      const lines = response.data
        .split("\n")
        .slice(1)
        .map((line) => {
          const [file, text, number, hex] = line.split(",");
          if (file && text && !isNaN(number) && hex) {
            return { text, number: Number(number), hex };
          }
        })
        .filter(Boolean);

      return { file: fileName, lines };
    } catch (error) {
      throw new Error(
        `Error fetching data for file ${fileName}: ${error.message}`
      );
    }
  }
}

export default FileService;
