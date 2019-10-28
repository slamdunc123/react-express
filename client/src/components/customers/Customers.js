import React, { Component } from 'react';
import './Customers.css';

class Customers extends Component {
	constructor() {
		super();
		this.state = {
			customers: []
		};
	}

	componentDidMount() {
		fetch('/api/customers')
			.then(res => res.json())
			.then(customers =>
				this.setState(
					{
						customers: customers
					},
					() => console.log('Customers fetched...', customers)
				)
			);
	}

	render() {
		return (
			<div>
				<h2>Customers</h2>
				<ul>
					{this.state.customers.map((customer, index) => (
						<li key={index}>{customer.firstName}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Customers;
