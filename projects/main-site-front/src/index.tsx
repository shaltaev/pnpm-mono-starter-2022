import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import './main.css'

import { App } from './App'

const container = document.createElement('div')
container.id = 'root'
document.body.appendChild(container)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = ReactDOM.createRoot(container)

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
)
