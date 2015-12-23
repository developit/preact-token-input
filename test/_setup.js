import chai from 'chai';
import sinonChai from 'sinon-chai';
import jsxChai from 'preact-jsx-chai';
chai.use(sinonChai);
chai.use(jsxChai);

// this is gross, but it avoids switching to Karma just to support sketchy stylesheet injection
const node = {appendChild(){}};
global.document = { createElement:()=>node, createTextNode:()=>node, getElementsByTagName:()=>[node] };
