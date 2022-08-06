import { shallowMount } from "@vue/test-utils";
import CommentItem from "@/components/ListItems/CommentItem";
describe("CommentItem.vue", () => {
  it("renders props comment.email when passed", async () => {
    const props = {
      comment: {
        email: "email",
        body: "body",
      },
    };
    const wrapper = shallowMount(CommentItem, {
      propsData: props,
    });
    console.debug("Message here", wrapper.props(), "end");
    expect(wrapper.props().email).toBe(props.email);
    expect(wrapper.props().email).toBe(props.email);
  });
});
