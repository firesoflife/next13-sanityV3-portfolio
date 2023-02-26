export default {
  name: 'machine',
  type: 'document',
  title: 'Machine',
  fields: [
    {
      name: 'machine_title',
      type: 'string',
      title: 'Machine Title'
    },
    {
      name: 'purpose',
      type: 'text',
      title: 'Purpose',
      description: 'What is this computer for? What do you do with it?'
    },
    {
      name: 'machineSpecs',
      title: 'Machine Specs',
      type: 'object',
      description: 'Enter details about this machine here.',
      fields: [
        {
          name: 'cpu',
          type: 'string',
          title: 'CPU',
          description: 'Manufacturer, '
        },
        {
          name: 'motherboard',
          type: 'string',
          title: 'Motherboard'
        },
        {
          name: 'memory',
          title: 'RAM',
          type: 'object',
          fields:
            [

              {
                name: 'ram_name',
                type: 'string',
                title: 'RAM Name',
                description: 'RAM type, name, brand etc'
              },
              {
                name: 'capacity',
                type: 'string',
                title: 'Capacity (in GB)'
              },
              {
                name: 'module_count',
                type: 'string',
                title: 'Number of RAM Modules',
                options: {
                  list: [
                    {
                      title: '1', value: '1'
                    },
                    {
                      title: '2', value: '2'
                    },
                    {
                      title: '3', value: '3'
                    },
                    {
                      title: '4', value: '4'
                    },
                  ],
                  layout: 'radio'
                }
              }
            ]
        },
        {
          name: 'case',
          title: 'Case / Chassis',
          type: 'object',
          fields: [
            {
              name: 'case_brand',
              type: 'string',
              title: 'Case Brand'
            },
            {
              name: 'model',
              type: 'string',
              title: 'Model or series',
            },
            {
              name: 'cooling_and_fans',
              title: 'Cooling & Fans',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [
                    {
                      type: 'cooling'
                    }
                  ]
                }
              ]
            },

            {
              name: 'features',
              type: 'array',
              title: 'Key Features',
              of: [{ type: 'string' }],
              options: {
                list: [
                  { title: 'glass on front', value: 'front_glass' },
                  { title: 'glass on one side', value: 'side_glass_one' },
                  { title: 'glass on two sides', value: 'side_glass_two' },
                  { title: 'mesh airflow', value: 'mesh' },
                  { title: 'dual compartment', value: 'dual' }
                ]
              }
            }
          ]
        },
        {
          name: 'gpu',
          title: 'GPU',
          type: 'object',
          fields: [
            {
              name: 'brand',
              title: 'GPU Brand / Maker',
              type: 'string'
            },
            {
              name: 'model',
              title: 'Model and Series Number',
              type: 'string',
            },
            {
              name: 'gpu_maker',
              title: 'GPU Chip Maker',
              type: 'string'
            },
            {
              name: 'memory',
              title: 'GPU RAM',
              type: 'string'
            }
          ]
        },
        {
          name: 'storage_drives',
          title: 'Storage Drives',
          type: 'array',
          of: [{
            type: 'reference',
            to: [
              { type: 'storage' }
            ]
          }]
        },

        {
          name: 'os',
          type: 'string',
          title: 'Operating System'
        },
      ],
    },
    {
      name: 'peripheral_device',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'peripheral_used',
      title: 'Peripheral Used With Device',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'peripheral' }
        ]
      }]
    },
    {
      name: 'virtual_machines',
      title: 'Running Virtual Machines',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'virtualMachine' }
          ]
        }
      ]
    },
  ]
}

// {
//   name: 'peripherals',
//     type: 'object',
//       title: 'Peripherals',
//         fields: [
//           {
//             name: 'keyboard',
//             type: 'string',
//             title: 'Keyboard'
//           },
//           {
//             name: 'mouse',
//             type: 'string',
//             title: 'Mouse',
//           },
//           {
//             name: 'sound',
//             type: 'string',
//             title: 'Sound devices / Sound Cards'
//           },
//           {
//             name: 'other',
//             type: 'string',
//             title: 'Other equipment',
//             description: 'Things like hubs, important connectors, KVM etc'
//           },
//         ]
// },