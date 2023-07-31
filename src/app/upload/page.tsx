"use client";
import { HttpAdapter } from "@/adapters/axios";
import Loading from "@/components/Loading";
import HeaderPage from "@/components/header";
import ListFiles from "@/components/listFiles";
import React from "react";
import { toast } from "react-toastify";

export default function Upload() {
  const [filesData, setFilesData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const packFiles = (files: any) => {
    const data = new FormData();
    [...files].forEach((file, i) => {
      data.append(`pdf`, file, file.name);
    });
    return data;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !files.length) return;
    const filesArray: File[] = [];
    for (let i = 0; i < files.length; i++) {
      filesArray.push(files[i]);
    }

    setFilesData(filesArray);
  };
  const sendFilesUpload = async () => {
    const data = packFiles(filesData);
    return await HttpAdapter.fetch({
      url: "/pdf/reader",
      method: "POST",
      data,
    });
  };

  const handleSendFiles = async () => {
    try {
      setLoading(true);
      const resultSend = await sendFilesUpload();
      const newFilesData: any[] = [];
      resultSend.map((item: any, key: number) => {
        const uploadSuccess = Object.values(item)[0];
        const file = filesData[key];
        file.uploadSuccess = uploadSuccess;
        newFilesData.push(file);
      });
      setFilesData(newFilesData);
    } catch (error) {
      toast.error("Faturas inválidas");
      setFilesData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <HeaderPage title="Importar faturas" />
      <main>
        <div className=" w-max  space-y-4 align-middle items-center bg-white p-5 rounded-2xl mt-3 m-auto">
          <div className="flex space-x-5">
            <div className="flex flex-col self-center">
              <label
                htmlFor="pdf"
                className="text-sm mb-1 font-medium border-2 border-dashed border-gray-200  p-5 cursor-pointer"
              >
                Clique para selecionar o(s) arquivo(s)
              </label>
              <input
                type="file"
                name="pdf"
                multiple
                id="pdf"
                accept="application/pdf"
                onChange={handleChange}
                className="hidden m-0  w-full cursor-pointer "
              />
            </div>
            <div className="flex flex-col justify-between h-full items-center">
              <span className="font-normal text-sm mb-1"> Selecionados</span>
              <span className="font-bold text-green-800 text-3xl">
                {" "}
                {filesData.length}
              </span>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              type="submit"
              className=" w-full m-0  bg-red-700 min-h-[40px] text-xs font-bold pl-4 pr-4 text-white"
              onClick={() => setFilesData([])}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={`w-full m-0  bg-green-900 min-h-[40px] text-xs font-bold pl-4 pr-4 text-white ${
                filesData.length <= 0 ? "opacity-50" : ""
              }`}
              onClick={handleSendFiles}
            >
              Importar faturas
            </button>
          </div>
        </div>
        <div className="relative">
          {loading && (
            <div className="absolute w-full h-full flex justify-center items-center z-50">
              <Loading />
            </div>
          )}
          <div className={`${loading && "blur-sm"}`}>
            <ListFiles dataFiles={filesData} />
          </div>
        </div>
      </main>
    </div>
  );
}
