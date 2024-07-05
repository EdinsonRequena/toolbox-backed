import pkg from "chai";
import sinon from "sinon";
import axios from "axios";
import FileService from "../src/services/fileService.js";

const { expect } = pkg;

describe("FileService", () => {
  let fileService;
  let axiosGetStub;

  beforeEach(() => {
    fileService = new FileService();
    axiosGetStub = sinon.stub(axios, "get");
  });

  afterEach(() => {
    axiosGetStub.restore();
  });

  it("should fetch the list of files", async () => {
    const mockFiles = { data: { files: ["file1.csv", "file2.csv"] } };
    axiosGetStub.resolves(mockFiles);

    const files = await fileService.fetchFiles();
    expect(files).to.eql(["file1.csv", "file2.csv"]);
  });

  it("should fetch data for a specific file", async () => {
    const mockFileData = "file,text,number,hex\nfile1,example,1234,abcd1234";
    axiosGetStub.resolves({ data: mockFileData });

    const fileData = await fileService.fetchFileData("file1.csv");
    expect(fileData).to.eql({
      file: "file1.csv",
      lines: [{ text: "example", number: 1234, hex: "abcd1234" }],
    });
  });
});
