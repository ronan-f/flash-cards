const mockKnex = (s) => {
  return {
    select: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    where: jest.fn(({ email }) => {
      return {
        then: () => {
          return {
            catch: () => {
              return {
                email,
                param: s
              }
            }
          }
        }
      }
    }),
    first: jest.fn().mockReturnThis(),
    then: jest.fn().mockReturnThis()
  }
}
const User = require('../../app/DAL/getUser')(mockKnex);

test("getUser should access the 'users' table", async () => {
  const res = await User.getUser("r@r.com");
  expect(res.param).toBe('users');
})

test("getUser should call DB with email param", async () => {
  const user = await User.getUser("r@r.com");
  expect(user).toBeDefined();
  expect(user.email).toBe("r@r.com");
});