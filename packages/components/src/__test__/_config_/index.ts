import * as Adapter from 'enzyme-adapter-react-16';

const setEnzymeConfiguration = Enzyme => {
  return Enzyme.configure({
    adapter: new Adapter(),
  });
};

export default setEnzymeConfiguration;
