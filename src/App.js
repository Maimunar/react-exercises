import "./App.css";
import React, {useState} from "react";
import { defaultTemplate} from './defaultTemplate'
import { Editor } from "./Editor";
import { Preview } from "./Preview";

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return prismjs.highlight(code, prismjs.languages.javascript, 'javascript');
  }
});

export const App = () => {
  const [textInput, setTextInput] = useState(defaultTemplate)

  return (
    <>
    <div id="container">
      <Editor onChange={(e) => setTextInput(e.target.value)} textInput={textInput} />
      <Preview output={marked(textInput)}/>
    </div>
    </>
  );
}

