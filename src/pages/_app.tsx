import * as React from 'react';
import { AppType } from 'next/dist/next-server/lib/utils';
import "../styles/global.css";

const App: AppType = ({Component, pageProps}) => {
    return (
        <Component {...pageProps}/>
    )
}

export default App;
