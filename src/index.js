import React from "react"
import ReactDOM from "react-dom"
import { GlobalStateProvider } from "./redux/store"
import "normalize.css"
import App from "./containers/app"
import * as serviceWorker from "./utilities/service_worker"

ReactDOM.render(
	<GlobalStateProvider>
		<App />
	</GlobalStateProvider>,
	document.getElementById("root")
)

serviceWorker.register()
