export default {
  name: 'machine',
  type: 'document',
  title: 'Machine',
  fields: [
    {
      name: 'machine',
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
          title: 'Case / Chasis',
          type: 'string'
        },
        {
          name: 'gpu',
          title: 'GPU',
          type: 'string'
        },
        {
          title: 'Storage',
          name: 'storage',
          type: 'object',
          fields: [
            {
              name: 'storage_type',
              type: 'string',
              title: 'Storage Type',
              options: {
                list: [
                  {
                    title: 'SSD', value: 'ssd'
                  },
                  {
                    title: 'HDD', value: 'hdd'
                  },
                  {
                    title: 'NVMe', value: 'nvme'
                  },
                  {
                    title: 'M.2', value: 'm2'
                  },
                ]
              }
            },
            {
              name: 'brand',
              type: 'string',
              title: 'Brand / Maker'
            },
            {
              name: 'series',
              type: 'string',
              title: 'Drive Series'
            },
            {
              name: 'capacity',
              type: 'string',
              title: 'capacity'
            },
          ]
        },
        {
          name: 'peripherals',
          type: 'object',
          title: 'Peripherals',
          fields: [
            {
              name: 'keyboard',
              type: 'string',
              title: 'Keyboard'
            },
            {
              name: 'mouse',
              type: 'string',
              title: 'Mouse',
            },
            {
              name: 'sound',
              type: 'string',
              title: 'Sound devices / Sound Cards'
            },
            {
              name: 'other',
              type: 'string',
              title: 'Other equipment',
              description: 'Things like hubs, important connectors, KVM etc'
            }
          ]
        },
        {
          name: 'os',
          type: 'string',
          title: 'Operating System'
        },
        {
          name: 'virtual_machines',
          type: 'object',
          title: 'Virtual Machines Running',
          fields: [
            {
              name: 'hypervisor',
              type: 'string',
              title: 'Hypervisor'
            },
            {
              name: 'virtual_os',
              type: 'string',
              title: 'Virtualized OS'
            },
            {
              name: 'services',
              type: 'string',
              title: 'Services Running'
            },
            {
              name: 'spec_allocations',
              type: 'text',
              title: 'Hardware allocations'
            }
          ]
        }
      ],
    }
  ]
}