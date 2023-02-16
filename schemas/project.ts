export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'project_name',
      type: 'string',
      title: 'Project Name',
    },
    {
      name: 'details',
      type: 'text',
      title: 'Project Details',
      description: 'A few sentences about this project.',
    },
    {
      name: 'category',
      title: 'Project Type',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        // layout: 'tags',
        list: [
          { title: 'Original', value: 'original' },
          { title: 'Video Guide', value: 'videoTutorial' },
          { title: 'Written Guide', value: 'writtenGuide' },
          { title: 'Course Project', value: 'courseProject' },
        ],
      },
    },
    {
      name: 'goals',
      type: 'string',
      title: 'Project Goals',
      description:
        'What was the intended outcome for this project? What was the purpose for doing it?',
    },
    {
      name: 'technology',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'code',
      type: 'url',
      title: 'Github Link',
    },
    {
      name: 'cover',
      title: 'Project Image',
      type: 'image',
    },
  ],
}
