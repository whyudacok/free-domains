addSubDomain({
  description: 'A website that converts Youtube videos into mp3 files. Made using Next.js',
  domain: 'is-an.app',
  subdomain: 'yt2mp3',
  owner: {
    repo: 'https://github.com/avalynndev/youtube2mp3',
    email: 'avalynndev@gmail.com',
  },
  record: {
    CNAME: 'cname.vercel-dns.com',
  },
  proxy: false,
})
