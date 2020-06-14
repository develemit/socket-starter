exports.seed = async (knex, Promise) => {
  const users = knex('users');
  await users.del();
  users.insert([
    {
      first_name: 'Emit',
      last_name: 'Dutcher'
    }
  ]);
};
