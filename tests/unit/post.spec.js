import { mount } from "@vue/test-utils";
import PostItem from "@/components/Celltems/PostItem";
import { capitalize } from "@/helpers/HelperFunctions";
describe("CommentItem.vue", () => {
  it("renders props when passed", async () => {
    const props = {
      post: {
        title: "title",
        body: "body",
      },
      user: {
        name: "name",
        username: "username",
      },
    };
    const wrapper = mount(PostItem, {
      propsData: props,
    });
    expect(wrapper.text()).toContain(capitalize(props.post.title));
    expect(wrapper.text()).toContain(props.post.body);
    expect(wrapper.text()).toContain(props.user.name);
    expect(wrapper.text()).toContain(props.user.username);
  });
});
