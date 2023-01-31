import React from 'react';
import { DefaultEditor } from 'react-simple-wysiwyg';

const ProgramsCMS = () => {
  const [html, setHtml] = React.useState(' ');
  
  function onChange(e) {
    setHtml(e.target.value);
  }

  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>test</h1>
    <DefaultEditor name='test' value={html} onChange={onChange} />
    </div>
  );
}; export default ProgramsCMS;