export default {
  name: 'storage',
  type: 'document',
  title: 'Storage Type',
  fields: [
    {
      name: 'drive_name',
      type: 'string',
      title: 'Drive Name'
    },
    {
      name: 'kind',
      type: 'string',
      title: 'Type of Storage Device',
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
      title: 'Brand / Manufacturer'
    },
    {
      name: 'series',
      type: 'string',
      title: 'Drive Series',
      description: 'example using Western Digital: "Blue, Red, Black etc'
    },
    {
      name: 'capacity',
      type: 'string',
      title: 'Storage Capacity',
      descriptions: 'enter value in GB'
    },
    {
      name: 'speed',
      type: 'string',
      title: 'Drive Rating / Speed',
      description: 'Enter number in MB/s. If drive is HDD, include RPM'
    },
    {
      name: 'assigned',
      type: 'string',
      title: 'Drive Name Assignment',
      description: 'Add the drive name as it appears in the OS - Windows & Linux ex: C: or D: etc. For Mac might be a canonical name'
    }
  ]
}