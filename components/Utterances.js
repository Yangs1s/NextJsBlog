import React, { memo } from 'react';
function Utterances() {
    return (
        <section
            ref={(elem) => {
                if (!elem) {
                    return
                }
                const scriptElement = document.createElement('script')
                scriptElement.src = "https://utteranc.es/client.js"
                scriptElement.async = true
                scriptElement.setAttribute('repo', 'Yangs1s/NextJsBlog')
                scriptElement.setAttribute('theme', 'gruvbox-dark')
                scriptElement.setAttribute('issue-term', 'pathname')
                scriptElement.crossOrigin = 'anonymous'
                elem.appendChild(scriptElement)
            }}
        />

    );
};


export default React.memo(Utterances)
