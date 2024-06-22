addSubDomain({
  description: 'Web api.', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'kizoapi', // desired subdomain name
  owner: {
    repo: 'https://github.com/whyudacok/free-domains',
    email: 'r12350042@gmail.com',
  },
  record: {
      CNAME: 'cname.vercel-dns.com'
  }
})
