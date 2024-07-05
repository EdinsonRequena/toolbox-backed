import FileService from "../services/fileService.js";

const fileService = new FileService();

class FileController {
  async getFileList(req, res) {
    try {
      const files = await fileService.fetchFiles();
      res.json(files);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getFileData(req, res) {
    const { fileName } = req.query;
    try {
      if (fileName) {
        const fileData = await fileService.fetchFileData(fileName);
        res.json(fileData);
      } else {
        const files = await fileService.fetchFiles();
        const fileDataPromises = files.map(async (file) => {
          try {
            const fileData = await fileService.fetchFileData(file);
            return fileData;
          } catch (error) {
            console.error(
              `Error fetching data for file ${file}: ${error.message}`
            );
            return { file, error: error.message };
          }
        });
        const fileData = await Promise.all(fileDataPromises);
        res.json(fileData);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new FileController();
