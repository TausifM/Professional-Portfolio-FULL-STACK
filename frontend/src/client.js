import sanityClient from '@sanity/client';
import imgUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'xb5e6bjr',
    dataset:'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skeCyRspehAxrBkh1mkZaV6nPnzIBT0Vb0Fl9CmTS1g430KJ2cUSWq3GuJTQs4zJFlMHA13GfqBBz6MaijmuqNWvORKoogIVPv7HAcLxjlECaxqIKBiaNt10bCWNnwbKiIXRbS7b5WDgC1mNCgRcSQWNco9ysaXeM4LDR3pWIjxdPbLWCGm1'
})
const builder = imgUrlBuilder(client);
export const urlFor = (source) =>  builder.image(source)