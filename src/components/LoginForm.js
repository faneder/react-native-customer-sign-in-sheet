import React, { Component } form 'react';
import { Card, CardSection, Button, Input } from './components';

class LoginForm extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="email@"
					>
					</Input>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="Password"
					>
					</Input>
				</CardSection>
				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;