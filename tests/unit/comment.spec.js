import { shallowMount } from "@vue/test-utils";
import CommentItem from "@/components/Celltems/CommentItem";
describe("CommentItem.vue", () => {
  it("renders props when passed", async () => {
    const props = {
      comment: {
        email: "email",
        body: "body",
      },
    };
    const wrapper = shallowMount(CommentItem, {
      propsData: props,
    });
    expect(wrapper.text()).toContain(props.comment.email);
    expect(wrapper.text()).toContain(props.comment.body);
  });
});
