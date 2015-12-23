import { h, Component } from 'preact';
import tagsInput from 'tags-input';
import 'tags-input/tags-input.css';

const CLASS_NAME = 'token-input';

export default class TokenInput extends Component {
	shouldComponentUpdate() {
		return false;
	}

	componentDidMount() {
		tagsInput(this.getInput());
		let input = this.getInput();
		input.setValue(this.value || '');
	}

	getInput() {
		let { base } = this;
		return base && (base.lastElementChild || base.lastChild);
	}

	setValue(value) {
		let input = this.getInput();
		if (!input) return;
		if (!input.setValue) {
			input.value = value;
		}
		else if (String(value)!==String(input.getValue())) {
			input.setValue(String(value));
		}
	}

	getValue() {
		let input = this.getInput(),
			value = input ? (input.getValue ? input.getValue() : input.value) : this.props.value;
		return typeof value==='string' ? value.split(',') : value;
	}

	componentWillReceiveProps({ value }) {
		let prev = this.getValue();
		if (value!==prev && String(value)!==String(prev)) {
			this.setValue(value);
		}
	}

	handleEvent({ type, target }) {
		let value = this.getValue();
		for (let i in this.props) {
			if (this.props.hasOwnProperty(i) && i.toLowerCase()===`on${type}`) {
				this.props[i]({ type, value, target, currentTarget:this });
			}
		}
	}

	render(props, state) {
		let c, p = {},
			evt = this.handleEvent.bind(this);
		for (let i in props) if (props.hasOwnProperty(i)) {
			if (i==='class' || i==='className') {
				c = props[i];
			}
			else if (!i.match(/^on(input|change)$/i)) {
				p[i] = props[i];
			}
		}
		p.type = 'tags';

		if (!c) c = CLASS_NAME;
		else if (typeof c==='string') c += ' '+CLASS_NAME;
		else if (typeof c==='object') c[CLASS_NAME] = true;

		return (
			<div class={c}>
				<input {...p} onChange={evt} onInput={evt} />
			</div>
		);
	}
}
