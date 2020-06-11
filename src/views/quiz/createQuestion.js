import React from "react";

class Question extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			options: [],
			answers: [],

			option1: "",
			option2: "",
			option3: "",
			option4: "",
			answer1: false,
			answer2: false,
			answer3: false,
			answer4: false,
		};
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	updateOption = (e, index) => {
		this.setState((	))
	}

	handleCheckbox = (e((	))) => {
		this.setState({
			[e.target.name]: e.target.checked,
		});
	};

	handleSendQuestion = () => {
		var {
			option1,
			option2,
			option3,
			option4,
			answer1,
			answer2,
			answer3,	
			answer4,
		} = this.state;
		var question = {
			title: this.state.question,
			options: [option1, option2, option3, option4],
			answers: [],
		};

		if (answer1) {
			question.answers.push(option1);
		}
		if (answer2) {
			question.answers.push(option2);
		}
		if (answer3) {
			question.answers.push(option3);
		}
		if (answer4) {
			question.answers.push(option4);
		}
		return question;
	};


	render() {
		return (
			<div className="shadow p-3 mb-5 bg-white rounded">
				<div className="form-row">
					<div className="form-group col-md-12">
						<label htmlFor="category">Question</label>
						<input
							onChange={(e) => this.handleChange(e)}
							type="text"
							name="title"
							className="form-control"
							id="title"
							value={this.state.title}
							required
						/>
					</div>

					<div className="form-group col-md-6">
						<label htmlFor="subcategory">Option 1</label>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<div className="input-group-text">
									<input
										type="checkbox"
										aria-label="Checkbox for following text input"
										name="answer1"
										onChange={(e) => this.handleCheckbox(e)}
										checked={this.state.answer1}
									/>
								</div>
							</div>
							<input
								type="text"
								name="option1"
								value={this.state.options[0] || ""}
								onChange={(e) => this.updateOption(e, 0)}
								className="form-control"
								aria-label="Text input with checkbox"
							/>
						</div>
					</div>

					<div className="form-group col-md-6">
						<label htmlFor="subcategory">Option 2</label>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<div className="input-group-text">
									<input
										name="answer2"
										onChange={(e) => this.handleCheckbox(e)}
										checked={this.state.answer2}
										type="checkbox"
										aria-label="Checkbox for following text input"
									/>
								</div>
							</div>
							<input
								type="text"
								name="option2"
								value={this.state.option2}
								onChange={(e) => this.handleChange(e)}
								className="form-control"
								aria-label="Text input with checkbox"
							/>
						</div>
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="subcategory">Option 3</label>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<div className="input-group-text">
									<input
										name="answer3"
										onChange={(e) => this.handleCheckbox(e)}
										checked={this.state.answer3}
										type="checkbox"
										aria-label="Checkbox for following text input"
									/>
								</div>
							</div>
							<input
								type="text"
								name="option3"
								value={this.state.option3}
								onChange={(e) => this.handleChange(e)}
								className="form-control"
								aria-label="Text input with checkbox"
							/>
						</div>
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="subcategory">Option 4</label>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<div className="input-group-text">
									<input
										name="answer4"
										onChange={(e) => this.handleCheckbox(e)}
										checked={this.state.answer4}
										type="checkbox"
										aria-label="Checkbox for following text input"
									/>
								</div>
							</div>
							<input
								type="text"
								name="option4"
								value={this.state.option4}
								onChange={(e) => this.handleChange(e)}
								className="form-control"
								aria-label="Text input with checkbox"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Question;
