export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "imageurl",
      title: "ImgURL",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "feedback",
      title: "Feedback",
      type: "string",
    },
  ],
};
// export default {
//     type: 'object',
//     name: 'myObject',
//     fields: [ // fields must be defined, and it must be an array
//       {
//         name: 'myField', // field name is required and must be unique
//         type: 'string' // field type is required
//       },
//       // ... 
//       {
//         name: 'myField', // 💥 ERROR a field named "myField" is already defined on this object
//         type: 'string'
//       }
//     ]
//   }