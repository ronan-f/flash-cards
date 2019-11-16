const mockKnex = (s) => {
  return {
    insert: jest.fn(({ name: { name }, email: { email } }) => {
      return {
        catch: () => {
          return {
            param: s,
            user: {
              name,
              email
            }
          }
        }
      }
    }),
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
const User = require('../../app/DAL/User')(mockKnex);

test('getUser should access the "users" table', async () => {
  const res = await User.getUser('r@r.com');
  expect(res.param).toBe('users');
})

test('getUser should call DB with email param', async () => {
  const user = await User.getUser('r@r.com');
  expect(user).toBeDefined();
  expect(user.email).toBe('r@r.com');
});

test('saveUser should access the "users" table', async () => {
  const res = await User.saveUser({ name: 'r' }, { email: 'r@r.com' }, { hashedPassword: 'ajdnfebf2e2'});
  expect(res.param).toBe('users');
});

test('saveUser should call insert with user params', async () => {
  const desiredUser = { name: 'r', email: 'r@r.com' };
  const res = await User.saveUser({ name: 'r' }, { email: 'r@r.com' }, { hashedPassword: 'ajdnfebf2e2'});
  expect(res.user).toBeDefined();
  expect(res.user).toMatchObject(desiredUser);
});