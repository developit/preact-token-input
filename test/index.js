import TokenInput from '..';
import { h, Component } from 'preact';
import { expect } from 'chai';
// import { spy, match } from 'sinon';

let handleEvent = (function handleEvent(){}).bind({});

describe('preact-token-input', () => {
	describe('<TokenInput />', () => {
		it('should be a function', () => {
			expect(TokenInput).to.be.a('function');
		});

		it('should render a wrapped tag input', () => {
			expect(<TokenInput />).to.eql(
				<div class="token-input">
					<input
						onChange={handleEvent}
						onInput={handleEvent}
						type="tags"
					/>
				</div>
			);
		});
	});
});
