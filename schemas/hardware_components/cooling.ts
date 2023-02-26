export default {
  name: 'cooling',
  type: 'document',
  title: 'Cooling Type',
  fields: [
    {
      name: 'kind',
      type: 'string',
      title: 'Type of Cooling Device',
      options: {
        list: [
          {
            title: '120mm Fan', value: '120mm'
          },
          {
            title: '240mm Fan', value: '240mm'
          },
          {
            title: 'CPU Fan', value: 'CPU Fan'
          },
          {
            title: 'Liquid AIO', value: 'Liquid'
          },
          {
            title: 'Radiator', value: 'Radiator'
          },
          {
            title: 'CPU Radiator & Radiator', value: 'CPU Radiator & Fan Combo'
          },

        ]
      },
    },
    {
      name: 'brand',
      type: 'string',
      title: 'Brand / Manufacturer'
    },
    {
      name: 'series',
      title: 'Series or Model',
      type: 'string'
    },
    {
      name: 'rgb',
      type: 'boolean',
      title: 'Has RGB'
    },
    {
      name: 'features',
      type: 'string',
      title: 'Other features'
    },
    {
      name: 'is_set',
      title: 'Is this fan part of a grouping of 2 or more?',
      type: 'boolean'
    },
    {
      name: 'number_in_set',
      title: 'Number of fans in Set?',
      type: 'string'
    },
    {
      name: 'case_position',
      title: 'Position of Fan or Fan Set in Case',
      type: 'string'
    },
  ]
}