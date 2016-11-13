const Svenjs = require("svenjs");

module.exports = Svenjs.create({
	initialState: {
		clicks: 0
	},
	_didUpdate(){
		console.log('this.state', this.state);
	},
	render() {
		const clickFunc = () => {
			console.log('click');
			let clicks = this.state.clicks;
			this.setState({clicks: ++clicks});
		};

		console.log('this.state', this.state);

		return (<div id="row">
			<div id="app">
				<h3>The Click App</h3>
				<input type="button" onClick={clickFunc.bind(this)}>Why not click me?</input>
			</div>
			<div id="time-travel">
				<h3>Click stats</h3>
				<p>You have clicked on the button {this.state.clicks} times</p>
			</div>
		</div>)
	}
});
