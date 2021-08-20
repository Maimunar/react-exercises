import React from 'react'

export const Preview = ({output}) => ( <>
    <h3>Preview</h3>
    <div id="preview" dangerouslySetInnerHTML={{__html: output}} />
    </>
    );
    