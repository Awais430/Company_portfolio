export default {
    name: 'form',
    title: 'form',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'number',
        title: 'Number',
        type: 'string', // Corrected to lowercase "number"
      },
      {
        name: 'companyName', // Changed to camelCase
        title: 'Company Name', // Changed to space-separated title
        type: 'string',
      },
      {
        name: 'size',
        title: 'Size',
        type: 'string',
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
      },
    ],
  }
  