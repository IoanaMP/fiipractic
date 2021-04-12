import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import AricleComponent from "../components/ArticleComponent";

describe("Articles page test", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<AricleComponent title="prim" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should render title", () => {
    const wrapper = shallow(<AricleComponent title={"ceva"} />);
    expect(wrapper.find(".articleTitle").text()).toBe("ceva");
  });
  it("should mount Article Component", async () => {
    const wrapper = await mount(<AricleComponent title={"ceva"} />);
    expect(wrapper.find(".articleTitle").text()).toBe("ceva");
  });
});
