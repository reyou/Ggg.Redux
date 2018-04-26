import Stream from "./presenter";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16
/*Configure enzyme to use the correct adapter for the react verstion This is 
enabling the Enzyme configuration with adapters in TS */
Enzyme.configure({ adapter: new Adapter() });
describe("Stream", () => {
  const props = {
    tracks: [{ title: "x" }, { title: "y" }],
    gggTimer: {}
  };

  it("shows two elements", () => {
    /*Shallow rendering is useful to constrain yourself to testing a component 
    as a unit, and to ensure that your tests aren't indirectly asserting on 
    behavior of child components.*/
    const element = shallow(<Stream {...props} />);

    expect(element.find(".track")).to.have.length(2);
  });
});
