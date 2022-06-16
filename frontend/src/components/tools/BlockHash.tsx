import axios from 'axios';
import React, { useState } from 'react';

 
function BlockHash() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const onSetResult = async (text:string) => {
      axios.get<string>(
        `${process.env["REACT_APP_BACKEND"]}/block_hash/hash/${text}`
      ).then(res =>{
        setResult(res.data);
      })
      .catch(error => {
        console.log(error)
        setResult(error.message);
      });
  }

  return (
    <div className='flex justify-center w-screen dark:bg-slate-500  '>
        <div className="flex bg-white justify-between dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-11/12 h-5/6 mt-8 flex-col">
          <h1 className="text-slate-900 dark:text-white mt-0 text-3xl font-medium tracking-tight">Tezos Block Hash</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
              Calculate how block hash is genarated from the raw block data.</p>
          <p><span className="text-slate-500 dark:text-slate-400 mt-2 text-lg"> Example: The raw from this  </span>
          <a href=' https://mainnet.tezos.marigold.dev/chains/main/blocks/BMSVJsH8Br1kJDk5bVzLkdeTEyVTQEDpbVH8Ui99F6WSXgJ1YE5/header/raw'> block, </a>
          <span className="text-slate-500 dark:text-slate-400 mt-2 text-lg">will return BMSVJsH8Br1kJDk5bVzLkdeTEyVTQEDpbVH8Ui99F6WSXgJ1YE5</span></p> 

          <textarea id="input" rows={4} onChange={(i) => setInput(i.target.value)} className="mt-8 block p-2.5 w-full h-2/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your input..."></textarea>
          
          <button type="submit" onClick={() => onSetResult(input)} className="inline-flex my-3 w-full items-center py-2.5 px-4 text-xs font-medium text-center justify-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
              Hash it
          </button>
          
          <textarea id="result" defaultValue={result} rows={4} className="block p-2.5 w-full h-2/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your result...">
          </textarea>
        </div>
    </div>
  );
}

export default BlockHash
