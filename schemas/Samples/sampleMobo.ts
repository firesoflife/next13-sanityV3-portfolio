export default {
  name: 'motherboardSpecs',
  title: 'Motherboard Specs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the motherboard specification'
    },
    {
      name: 'machine',
      title: 'Machine',
      type: 'reference',
      to: [{ type: 'machine' }]
    },
    {
      name: 'manufacturer',
      title: 'Manufacturer',
      type: 'string',
      description: 'The name of the motherboard manufacturer'
    },
    {
      name: 'socket',
      title: 'Socket',
      type: 'string',
      description: 'The type of CPU socket on the motherboard'
    }
    // Other fields relevant to the motherboardSpecs document type
  ]
}