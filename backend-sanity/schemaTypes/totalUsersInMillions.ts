import {defineField, defineType} from 'sanity'

export const totalUsersInMillionsType = defineType({
  name: 'totalUsersInMillions',
  title: 'Total Users In Millions',
  type: 'document',
  fields: [defineField({name: 'value', type: 'number'})],
})
