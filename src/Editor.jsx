import React from 'react'

export const Editor = ({onChange, textInput}) => {
    return (
      <>
      <h3>Editor</h3>
      <textarea id="editor" onChange={onChange} value={textInput}/>
    </>
    )
  }