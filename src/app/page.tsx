"use client";

import 'tkeditor/index.css';

import {
  CoreEditor,
  EditorProvider,
  Export,
} from 'tkeditor';

export default function Home() {
  
  return (  
    <div className="p-6 w-full">
      <EditorProvider isToolbar={false} allowPlugins={[]}  >
        <Export />
        <CoreEditor  />
      </EditorProvider>
    </div>
  );
}
