import React, { Component } from "react";
import { Table } from "react-bootstrap";

class InventoryList extends Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
	}

  // Need to add button to refresh list and add item
  // 10 7 preparing for Bluebeam interview
  // 10 8 interview with Juan from Bluebeam
  // Need to get back to .NET API and finish all the controllers
  // Study for US history Toast Master
  // Interview prep 
  // More interview prep

	refreshList() {
		fetch(process.env.REACT_APP_API + "inventory/3")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ items: data });
			});
	}

	componentDidMount() {
		this.refreshList();
	}

	componentDidUpdate() {
		this.refreshList();
	}

	render() {
		const { items } = this.state;
		// console.log(items);
		return (
			<div>
				<Table className="mt-4" striped bordered hover size="sm">
					<thead>
						<tr>
							<th>Id</th>
							<th>WarehouseLocation</th>
							<th>PackageNumber</th>
							<th>Option</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item) => (
							<tr key={item}>
								<td>{item.Id}</td>
								<td>{item.WarehouseLocation}</td>
								<td>{item.PackageCode.PackageNumber}</td>
								<td>Edit / Delete</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default InventoryList;