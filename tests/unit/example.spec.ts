import { shallowMount } from "@vue/test-utils";
import TableUsers from "@/modules/user/components/TableUsers.vue";

describe("TableUsers.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(TableUsers, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
