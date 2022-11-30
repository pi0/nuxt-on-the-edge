export default defineEventHandler(event => {
  const cityHeader = getHeader(event, 'x-vercel-ip-city')
  const city = cityHeader ? decodeURIComponent(cityHeader) : '-'
  const ipHeader = getHeader(event, 'x-forwarded-for')
  const ip = ipHeader ? ipHeader.split(',')[0] : '-'

  return {
    city,
    ip
  }
})
