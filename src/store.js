const Svenjs = require("../svenjs/es5/index");
let _data = ['Do this','Then do this'];
module.exports = Svenjs.createStore({
	init(){
		this.emit(_data);
	}
});
