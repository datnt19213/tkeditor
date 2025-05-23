"use client";
import 'tkeditor/index.css';

import { useState } from 'react';

import {
  CoreEditor,
  EditorProvider,
  Export,
  PLUGIN_DEFAULTS,
} from 'tkeditor';

export default function Home() {
  const [isFull, setIsFull] = useState(true)
  
  return (  
    <div className="p-6 w-full flex-col">
      <div className="flex px-6 gap-2 py-12 justify-between">
        <h1 className="text-3xl font-bold">TKEditor</h1>
        <div className='flex items-center gap-2'>
          <button type="button" className="min-w-40 text-sm cursor-pointer font-medium px-3 py-2 bg-white border border-gray-500 rounded-md" onClick={() => setIsFull(!isFull)} >
            {isFull ? 'All' : 'Only Export'}
          </button>
          <a href='https://github.com/datnt19213/tkeditor' target="_blank" rel="noreferrer" className="min-w-40 text-sm cursor-pointer font-medium px-3 py-2 bg-[#121217] border border-gray-500 rounded-md">
            Github
          </a>
        </div >
      </div>
      <EditorProvider isToolbar={isFull} allowPlugins={isFull ? PLUGIN_DEFAULTS : []}  >
        {!isFull && <Export />}
        <CoreEditor className="bg-gray-50 !px-6" />
      </EditorProvider>
    </div>
  );
}
