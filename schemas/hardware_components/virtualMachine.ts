import { schemaTypes } from '..';

export default {
  name: 'virtualMachine',
  type: 'document',
  title: 'Virtual Machine',
  fields: [
    {
      name: 'machine_name',
      title: 'Machine Name',
      type: 'string'
    },
    {
      name: 'operating_system',
      title: 'Operating System',
      type: 'string'
    },
    {
      name: 'os_version',
      title: 'OS Version or Code Name',
      type: 'string'
    },
    {
      name: 'dedicated_ram',
      title: 'Dedicated RAM',
      type: 'string'
    },
    {
      name: 'dedicated_cpu',
      title: 'Dedicated CPU',
      type: 'string'
    },
    {
      name: 'services_running',
      title: 'Running Service',
      type: 'string'
    },
  ]
}