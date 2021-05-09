import React from "react";
import HelloWorld from "components/helloworld";
import runtime from "serviceworker-webpack-plugin/lib/runtime";
if ("serviceWorker" in navigator) {
    const registration = runtime.register();
}

const App = (): React.ReactElement => <HelloWorld />;

export default App;
