import {defineField, defineType} from 'sanity'

export const newsletterSubscribedEmailsType = defineType({
  name: 'newsletterSubscribedEmails',
  title: 'Newsletter Subscribed Emails',
  type: 'document',
  fields: [defineField({name: 'email', type: 'email'})],
})
