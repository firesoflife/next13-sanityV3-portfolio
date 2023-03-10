export default {
  name: 'machineSample',
  title: 'MachineSample',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the machine'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the machine'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'The price of the machine in USD'
    }
    // Other fields relevant to the machine document type
  ]
}
