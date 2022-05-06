import 'jest'
import React from '@deps/react'
import { render } from '@deps/tlr'

import { App } from './App'

describe('App', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<App />)

		expect(baseElement).toBeTruthy()
	})
})
