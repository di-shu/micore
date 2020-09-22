const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    
    switch (pathname) {
      case '/':
        app.render(req, res, '/', query)
        break
      case '/about':
        app.render(req, res, '/about', query)
        break
      case '/contact':
        app.render(req, res, '/contact', query)
        break
      case '/portfolio':
        app.render(req, res, '/portfolio', query)
        break
      case '/services':
        app.render(req, res, '/services', query)
        break
      default:
        handle(req, res, parsedUrl)
    }
  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
