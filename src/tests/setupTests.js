// configure the environment that we are running the tests.
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
   adapter: new Adapter()
});