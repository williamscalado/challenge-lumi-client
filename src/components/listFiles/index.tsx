import { FileText } from "lucide-react";
interface IPropsFileList {
  dataFiles: any[];
}
export default function ListFiles({ dataFiles }: IPropsFileList) {
  return (
    <div className="mt-8 flex flex-wrap transition-all duration-1000 ">
      {dataFiles.length
        ? dataFiles.map((item: any, key: number) => {
            const { name, size, uploadSuccess } = item;
            const fileSizeMB =
              Math.round((Number(size) / (1024 * 1024)) * 100) / 100;

            return (
              <div
                key={key}
                className="bg-white shadow-md  space-x-3 max-w-max min-w-max mr-3  p-4 mb-4 text-sm border-1 rounded-md border-solid border-green-900 flex items-center transition-all "
              >
                <FileText size={16} className=" text-green-900" />
                <div className="flex flex-col ">
                  <span className=" max-w-[200px] break-all ...">{name}</span>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-400  ">
                      {fileSizeMB} MB
                    </span>
                    <span>
                      {typeof uploadSuccess !== "undefined" && (
                        <>
                          {uploadSuccess ? (
                            <span className="text-[8px] text-green-500 font-bold">
                              Importado
                            </span>
                          ) : (
                            <span className="text-[8px] text-red-500 font-bold">
                              Falha ao importar!
                            </span>
                          )}
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
