# preact-token-input

[![NPM](http://img.shields.io/npm/v/preact-token-input.svg)](https://www.npmjs.com/package/preact-token-input)
[![travis-ci](https://travis-ci.org/developit/preact-token-input.svg)](https://travis-ci.org/developit/preact-token-input)

A text field that tokenizes input, for things like tags.

> **[CodePen Demo](http://codepen.io/developit/pen/WrxmGx?editors=001)**
>
> ![preact-token-input](https://i.gyazo.com/36d5e8d0e0f7f04301a503d0fa5fd270.gif)

---


### Usage Example

Use `<TokenInput />` like a normal `<input>`. It supports the same props/attributes, including `value`, `onInput()` and `onChange()`.

```js
import TokenInput from 'preact-token-input';

const Tags = ({ tags, ...props }) => (
	<label class="tags">
		Add some tags:
		<TokenInput value={tags} {...props} />
	</form>
);

let tags = ['new', 'noteworthy', 'tech'];
render(<Tags list={tags} />, document.body);
```


### Usage with Linked State

`<TokenInput />` works with Linked State exactly the same way as any other input field:

```js
import TokenInput from 'preact-token-input';

class Form extends Component {
	render(props, { tags }) {
		return (
			<form>
				<TokenInput value={tags} onChange={ this.linkState('tags') } />
			</form>
		);
	}
}

render(<Form />, document.body);
```


---


### License

[MIT]


[Preact]: https://github.com/developit/preact
[MIT]: http://choosealicense.com/licenses/mit/
