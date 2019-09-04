import React from 'react'

const UserCard = props => {
	return (
		<div>
			{props.id}
			{props.name}
		</div>
	)
}

class UserCard2 extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		isSaving: false,
		error: undefined,
		settings: {},
	}
	render() {
		return <div>
			{this.state.isSaving ? 'SAVING' : ''}
			{this.state.error}
			<div onClick={this.updateName}>
				{name || 'Not yet set'}
			</div>
		</div>
	}
	componentDidMount() {
		this.fetchSetting()	
	}
	componentDidUpdate(prevProps) {
		if (this.props.id !== prevProps.id) {
			this.fetchSetting()
		}
	}
	fetchSetting() {
		window.fetch(`/api/user/${this.props.id}settings`)
			.then(resp => resp.json())
			.then(settings => {
				this.setState({ settings })
			})
	}
	updateName() {
		this.setState({
			isSaving: true,
		})
		window.fetch(`localhost:8080/api/user`, {
			method: 'PUT',
			body: JSON.stringify({
				firstName: 'Thomas'
			})
		})
			.then(resp => resp.json())
			.then((user) => {
				this.setState({
					firstName: user.firstName
					isSaving: false
				})
			})
			.catch(e => this.setState({ error: e }))
	}
}

const ParentThing = (props) => {
	// [1]
	// [3]
	return <div>{props.userIds.map(id => <UserCard id={id} key={id} />)}</div>
}


export default function CoolThing() {
	return (
		<div>
			<UserCard id={3} name="Thomas" />
		</div>
	)
}

React.createElement('div', {
	children: React.createElement(UserCard, { id: 3, name: 'Thomas' }),
})

{
	component: 'div',
	children: [
		{
			component: UserCard,
			props: {
				id: 3,
				name: 'Thomas'
			}
		}
	]
}