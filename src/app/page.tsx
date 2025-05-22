"use client";

import 'tkeditor/index.css';

import {
  CoreEditor,
  EditorProvider,
} from 'tkeditor';

export default function Home() {
  
  return (  
    <div className="p-6 w-full">
      <EditorProvider >
        <CoreEditor className='bg-black text-white ' />
      </EditorProvider>
    </div>
  );
}
