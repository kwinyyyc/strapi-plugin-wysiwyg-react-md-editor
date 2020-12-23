import React from 'react';
import PropTypes from 'prop-types';
import MDEditor from '@uiw/react-md-editor';

import styled from 'styled-components';
import '@uiw/react-md-editor/dist/markdown-editor.css';

const Wrapper = styled.div`
  .w-md-editor {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    img {
      max-width: 100%;
    }
    .w-md-editor-preview {
      display: block;
    }
  }
  .w-md-editor-content {
    flex: 1 1 auto;
  }
  .w-md-editor-text {
    margin: 0;
  }
  .wmde-markdown {
    display: none;
  }
`;

const Editor = ({ onChange, name, value }) => {
  return (
    <Wrapper>
      <MDEditor
        value={value}
        onChange={(newValue) => {
          onChange({ target: { name, value: newValue } });
        }}
      />
      <div style={{ padding: '50px 0 0 0' }} />
      <MDEditor.Markdown source={value} />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Editor;
