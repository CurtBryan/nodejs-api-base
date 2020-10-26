// * This project uses Jest for its unit and integration test
// * To run,
// ? LINK TO DOCS: https://jestjs.io/docs/en/getting-started.html

const { basicAddition, getUsernameById } = require("../Functions/examples/examples");

test("Two plus Two equals Four(Basic Function)", () => {
    const answer = basicAddition(2, 2)
    expect(answer).toEqual(4)
});

test("GetUserInfo(Async function)", async () => {
    const result = await getUsernameById(1);
    await expect(result).toBe("Bret");
});
