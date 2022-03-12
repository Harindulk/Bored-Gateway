import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'jgvupn72',
    dataset: 'production',
    apiVersion: 'v1',
    token:
        'skl0hde12atuuiZydBQ5B8V2BwqKOYlSQyTiVKbWhsFsSrqBBooEhWhIR4nNlsAVPNutyLGQBc4TQNEeFMzN9ZoBSd45kooBOIxKnKIcGke96cQUgXc1HCRXu0mARTt14BwOIjHWY4rsDaA0N6pFIa4wXw5dMd52Vm6SY8WRAprUg4n5UWDf',
    useCdn: false,
})