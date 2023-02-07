import React from 'react';
import SyntanxHighlighter from 'react-syntax-highlighter'
import { rainbow } from 'react-syntax-highlighter/dist/cjs/styles/hljs'




const CopyButton = ({ target }) => {
    const handleCopy = async () => {
        if (target) {
            try {
                await navigator.clipboard.writeText(target)
                alert('copy')
            } catch (error) {
                alert(`copied failed: ${error}`)
            }
        }

    }
    return <button onClick={handleCopy} className='absolute right-0.5 top-0.5 rounded-lg px-2 bg-white dark:text-gray-800' >Copy</button>
}
const CodeBlock = ({ children }) => {

    return (
        <div className='relative'>
            <CopyButton target={children} />
            <SyntanxHighlighter showLineNumbers style={rainbow}>
                {children}
            </SyntanxHighlighter>
        </div>
    );
};

export default CodeBlock;

