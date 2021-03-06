import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

const codeString = `function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      style,
      useInlineStyles,
      key
    }));
  }
}`;

export default function CodeSyntaxHighlight() {
  const [code] = useState(codeString);

  return (
    <IceContainer>
      <SyntaxHighlighter
        language="javascript"
        style={docco}
        customStyle={{ height: '500px' }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </IceContainer>
  );
}
