import React from 'react'
import data from './data/data'
import Table from './table/table'

console.log(data)

function App() {
	return (
		<>
			<h1>Exchange rates</h1>
			<Table data={data}/>
		</>
	)
}

export default App
