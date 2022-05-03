import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './main.css'

import { App } from './App'

const container = document.createElement('div')
container.id = 'root'
document.body.appendChild(container)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = createRoot(container)

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
)
