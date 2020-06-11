import React from "react";
import Question from "../quiz/createQuestion";

class CreateQuiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			questions: [],
		};
	}


	render() {
		
		return (
			<>
				<form className="container my-3">
					<h2 className="font-weight-bold my-3"> Create Quiz</h2>

					<div className="row">
						<div className="form-group col-md-6">
							<label htmlFor="title">Title</label>
							<input
								onChange={(e) => this.handleInput(e)}
								type="text"
								name="title"
								className="form-control"
								id="title"
								value={this.state.title}
								required
							/>
						</div>
					</div> 
        
				  {/* create questions  */}

					{Array.from({length : 3} , () => < Question/> )}

					<div className="d-flex justify-content-between">
						<div>
							<button
								onClick={(e) => this.handleSubmit(e)}
								type="primary"
								className="btn btn-primary"
							>
								Create
							</button>
						</div>
						<div className="align-self-end">
							<button
								type="button"
								className="btn btn-outline-primary"
								// onClick={this.addQuestionSet}
							>
								Add Question
							</button>
						</div>
					</div>
				</form>
			</>
		);
	}
}

export default CreateQuiz;
