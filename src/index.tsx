import * as Store from "./store";
import * as ReactDOM from "react-dom";
import * as React from "react";
import { RootComponent } from "./root"

Store.dispatch({ type: "INIT" });

Store.subscribe(render);

render();

function render() {

    ReactDOM.render(
        RootComponent({}),
        document.getElementById('root')
    );

}
