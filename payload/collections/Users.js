export const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Teacher', value: 'teacher' },
      ],
      defaultValue: 'admin',
      required: true,
    }
  ],
};
