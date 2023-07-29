"use client";

import React from "react";

export default function Upload() {
  const [files, setFiles] = React.useState<any>([]);
  const packFiles = (files: any) => {
    const data = new FormData();

    [...files].forEach((file, i) => {
      data.append(`pdf`, file, file.name);
    });
    return data;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !files.length) {
      alert("Please select a file!");
    }
    const data = packFiles(files);
    setFiles(data);

    console.log(files);
  };

  const handleSendFiles = () => {
    fetch("http://localhost:8000/pdf/reader", {
      method: "POST",
      body: files,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
      .finally(() => console.log("fim"));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input
        type="file"
        name="pdf"
        multiple
        id="pdf"
        accept="application/pdf"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSendFiles}>
        Transferir dados
      </button>
    </main>
  );
}
