export const Notices = {
  slug: 'notices',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Everyone can read notices
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'type',
      type: 'text',
      required: true,
      defaultValue: 'general',
      admin: {
        description: 'e.g., general, news, merit_list, exam_schedule'
      }
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: true,
      label: 'Visible to Public',
    },
    {
      name: 'publishDate',
      type: 'date',
      admin: {
        description: 'Leave blank to publish immediately, or set a future date to schedule.',
      },
    },
    {
      name: 'attachedFile',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional file attachment (e.g., PDF)',
      }
    }
  ],
};
