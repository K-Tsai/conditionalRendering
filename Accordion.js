import React from 'react';

class Accordion extends React.Component {
	state = {
		activeSectionIndex: null
	}
	handleClick = (index) => {
		console.log("clicked");
		this.setState({
			activeSectionIndex: index
		})
	}
  render() {
		let sections = this.props.sections;
		return (
			<ul className="Accordion">
				{
					sections.map((section, index) => {
						let currentElementClicked= "";
						if(this.state.activeSectionIndex === index){
							currentElementClicked= (<p>{section.content}</p>)
						}
						return (
							<li className="Accordion_item" key = {index}>
								<button onClick={() => this.handleClick(index)}>
									{section.title}
								</button>
								<p>{currentElementClicked}</p>
							</li>
						)
					})
				}
			</ul>)
	}
}

export default Accordion;