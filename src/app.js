import Component from '../svenjs/packages/svenjs/dist/svenjs-component';
import t  from '../svenjs/packages/svenjs/dist/svenjs-create-element';
import searchBox  from './searchbox';

class App extends Component {
	render() {
		return t('div', {class: 'svenapp'},
			searchBox
		)
	}
}
export default t(App);
