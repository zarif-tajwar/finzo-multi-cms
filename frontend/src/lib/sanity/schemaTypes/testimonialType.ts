import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'profession', type: 'string'}),
    defineField({
      name: 'image',
      type: 'image',
      options: {accept: 'image/png'},
      fields: [defineField({name: 'altText', type: 'string'})],
    }),
    defineField({name: 'testimony', type: 'string'}),
  ],
})
