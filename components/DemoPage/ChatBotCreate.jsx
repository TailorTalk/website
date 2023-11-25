"use client";

import { useState } from "react";
import path from "path";

const ChatBotCreationData = () => {

    const uploadTypes = ["Files", "Website"];
    const imageDirectory = path.join(process.cwd(), "/public/images/updateType");

    const [openIndex, setOpenIndex] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    function changeUploadType(index) {
        setOpenIndex(index);
    }

    return (
        <div>
            <div className="max-w-7xl px-4 lg:mx-auto">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="col-span-3 mt-6">
            {
                uploadTypes.map((types, index) => (
                    <div key={index} className="cursor-pointer text-sm font-semibold" onClick={() => changeUploadType(index)}>
                        {   
                            openIndex === index ? (
                            <div className="text-purple-500 bg-gray-100 px-6 py-3 rounded flex">
                                {types}
                            </div>
                            ) : (
                                <div className="px-6 py-3 rounded">
                                {types}
                            </div>
                            )
                        }
                    </div>
                    )
                )
            }
            </div>
          <div className="col-span-9 grid lg:grid-cols-10">
            <div className="col-span-6 mt-6 h-96 pb-20 rounded border">
                {
                    openIndex === 0 ? (
                    <>
                        <h3 className="text-xl font-semibold border-b text-gray-900 py-4 px-5">
                            Files
                        </h3>
                        <div className="p-5">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-60 border border-gray-300 rounded-lg cursor-pointer">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">.TXT</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden"/>
                            </label>
                            <p className="text-gray-400 py-4 text-sm text-center">Maximum number of file uploads: 1</p>
                        </div>
                    </>
                    ) : openIndex === 1 ? (
                    <>
                        <h3 className="text-xl font-semibold border-b text-gray-900 py-4 px-5">
                            Website
                        </h3>
                        <div className="p-5">
                            <div className="w-full h-60 border flex">
                                <input type="url" className="w-[60%] h-10 border rounded ml-8 my-8"></input>
                                <button className="bg-black w-[20%] h-10 my-8 mr-8 ml-4 rounded text-white font-semibold">Add Link</button>
                            </div>
                            <p className="text-gray-400 py-4 text-sm text-center">Maximum number of website links: 1</p>
                        </div>
                    </>
                    ) : (
                        <></>
                    )
                }
                
            </div>
            <div className="col-span-4 mt-6">
              <div className="h-44 mx-5 border">
                <h4 className="font-bold text-center mt-4">Sources</h4>
                <p className="font-semibold text-sm ml-4 mt-6">Total detected characters</p>
                <p className="text-sm ml-16">{wordCount}</p>
                <button className="bg-black w-[80%] mx-5 mt-4 h-10 rounded text-white font-semibold">Create Chatbot</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default ChatBotCreationData;