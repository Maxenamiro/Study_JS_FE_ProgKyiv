import React from 'react'
import "./table.css"

function Table(props) {
	return (
		<table>
			<tbody>
				{props.data.map((element) => {
					return (
						<tr>
							<th>{element.r030}</th>
                            <th>{element.txt}</th>
                            <th>{element.rate}</th>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default Table
