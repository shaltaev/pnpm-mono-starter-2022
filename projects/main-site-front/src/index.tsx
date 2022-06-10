import React, { StrictMode } from '@deps/react'
import ReactDom from '@deps/react-dom'

import './main.css'

import { App } from './App'

const container = document.createElement('div')
container.id = 'root'
document.body.appendChild(container)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = ReactDom.createRoot(container)

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
)
