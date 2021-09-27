import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Department extends Component {
	constructor(props) {
		super(props);
		this.state = { deps: [] };
	}

	refreshList() {
		fetch(process.env.REACT_APP_API + "department")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ deps: data });
			});
	}

	componentDidMount() {
		this.refreshList();
	}

	componentDidUpdate() {
		this.refreshList();
	}

	render() {
		const { deps } = this.state;
		console.log(deps);
		return (
			<div>
				<Table classname="mt-4" striped bordered hover size="sm">
					<thead>
						<tr>
							<th>DepartmentId</th>
							<th>DepartmentName</th>
							<th>Option</th>
						</tr>
					</thead>
					<tbody>
						{deps.map((dep) => (
							<tr key={dep.DepartmentId}>
								<td>{dep.DepartmentId}</td>
								<td>{dep.DepartmentName}</td>
								<td>Edit / Delete</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default Department;
