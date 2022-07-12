<script setup lang="ts">
import '~/app.css'

const { data: info } = await useAsyncData('info', () => globalThis.$fetch('/api/info', {
  headers: useRequestHeaders(['x-forwarded-for', 'x-vercel-ip-city'])
}))

// const info = useState('info', () => {
//   const event = useRequestEvent()
//   const cityHeader = event.req.headers['x-vercel-ip-city'] as string
//   const city = cityHeader ? decodeURIComponent(cityHeader) : '-'
//   const ipHeader = event.req.headers['x-forwarded-for'] as string
//   const ip = ipHeader ? ipHeader.split(',')[0] : '-'
//   return { city, ip }
// })

const generatedAt = useState('generatedAt', () => new Date().toISOString())
</script>

<template>
  <div>
    <div :style="{ height: '100%' }">
      <svg class="card" viewBox="0 50 840 440">
        <defs>
          <linearGradient id="gradient-1" gradientUnits="userSpaceOnUse" x1="420" y1="275" x2="420" y2="167"
            gradientTransform="matrix(1 0 0 -1 0 442)">
            <stop offset="0.464" style="stop-opacity:0.2"></stop>
            <stop offset="0.9" style="stop-opacity:0"></stop>
          </linearGradient>
          <linearGradient id="gradient-2" gradientUnits="userSpaceOnUse" x1="420" y1="325" x2="420" y2="117.001"
            gradientTransform="matrix(1 0 0 -1 0 442)">
            <stop offset="0.464" style="stop-opacity:0.2"></stop>
            <stop offset="1" style="stop-opacity:0"></stop>
          </linearGradient>
          <linearGradient id="gradient-3" gradientUnits="userSpaceOnUse" x1="420" y1="382" x2="420" y2="60.001"
            gradientTransform="matrix(1 0 0 -1 0 442)">
            <stop offset="0.464" style="stop-opacity:0.16"></stop>
            <stop offset="0.9" style="stop-opacity:0"></stop>
          </linearGradient>
          <linearGradient id="gradient-4" gradientUnits="userSpaceOnUse" x1="420" y1="488.788" x2="420" y2="-46.967"
            gradientTransform="matrix(1 0 0 -1 0 442)">
            <stop offset="0.089" style="stop-opacity:0.1"></stop>
            <stop offset="0.464" style="stop-opacity:0.27"></stop>
            <stop offset="0.896" style="stop-opacity:0"></stop>
          </linearGradient>
          <linearGradient id="gradient-5" gradientUnits="userSpaceOnUse" x1="420" y1="610" x2="420" y2="-168.179"
            gradientTransform="matrix(1 0 0 -1 0 442)">
            <stop offset="0.172" style="stop-opacity:0"></stop>
            <stop offset="0.464" style="stop-opacity:0.21"></stop>
            <stop offset="0.771" style="stop-opacity:0"></stop>
          </linearGradient>
          <linearGradient id="gradient-vercel" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1.5" y2="1">
            <stop offset="0.3" style="stop-color:var(--g1)"></stop>
            <stop offset="0.5" style="stop-color:var(--g2)"></stop>
            <stop offset="0.8" style="stop-color:var(--g1)"></stop>
          </linearGradient>
          <linearGradient id="gradient-react" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1.1" y2="1">
            <stop offset="0.3" style="stop-color:var(--react)"></stop>
            <stop offset="0.5" style="stop-color:#BBF0FF"></stop>
            <stop offset="0.8" style="stop-color:var(--react)"></stop>
          </linearGradient>
          <symbol id="logo" viewBox="0 0 124 124" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M55.7498 27.1551C52.5277 21.615 44.4723 21.6149 41.2502 27.1551L6.13404 87.5346C2.91191 93.0748 6.93956 100 13.3838 100H40.7975C38.0438 97.5934 37.0241 93.4303 39.1079 89.8584L65.7033 44.2694L55.7498 27.1551Z"
              fill="#80EEC0" />
            <path
              d="M78.0002 40.3997C80.6668 35.8668 87.3332 35.8668 89.9998 40.3997L119.061 89.801C121.728 94.3339 118.395 100 113.062 100H54.9383C49.6052 100 46.2719 94.3339 48.9385 89.801L78.0002 40.3997Z"
              fill="#00DC82" />
          </symbol>
          <linearGradient id="#mask-gradient">
            <stop offset="0" stop-color="black"></stop>
            <stop offset="1" stop-color="white"></stop>
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="200" height="200" fill="url(#mask-gradient)"></rect>
          </mask>
        </defs>
        <g class="orbits" transform="translate(420, 220)">
          <g>
            <circle class="orbit" style="stroke:url(#gradient-1);animation-delay:0" r="53.4"></circle>
          </g>
          <g>
            <circle class="orbit" style="stroke:url(#gradient-2);animation-delay:0.03s" r="103.4"></circle>
            <circle class="gray satellite" style="animation-delay:0.9s" cx="-69.6" cy="-76" r="5.8"></circle>
          </g>
          <g>
            <circle class="orbit" style="stroke:url(#gradient-3);animation-delay:0.06s" r="160.4"></circle>
            <circle class="orange satellite" style="animation-delay:0.8s" cx="102.4" cy="-123" r="5.8"></circle>
          </g>
          <g>
            <circle class="orbit" style="stroke:url(#gradient-4);animation-delay:0.09s" r="267.3"></circle>
            <circle class="orange satellite" style="animation-delay:0.6s" cx="-243.6" cy="111.4" r="5.8"></circle>
            <circle class="gray satellite" style="animation-delay:1s" cx="250" cy="94.4" r="5.8"></circle>
            <circle class="orange satellite" style="animation-delay:0.7s" cx="-236.6" cy="-123.6" r="5.8"></circle>
          </g>
          <g>
            <circle class="orbit" style="stroke:url(#gradient-5);animation-delay:0.12s" r="388.5"></circle>
          </g>
        </g>
        <path id="vercel-logo" d="m336.4 261-46.2-80-46.2 80h92.4z" style="fill:url(#gradient-vercel)"></path>
        <g id="center">
          <path d="M420 202 v36 M 402 220h36"
            style="stroke-width:3.5625;stroke-linecap:round;stroke-linejoin:round;stroke:#999;fill:none"></path>
        </g>
        <use href="#logo" width="98" x="500"></use>
        <use href="#logo" width="98" x="500" mask="url(#mask)"></use>
      </svg>

      <main>
        <h1>
          <span>Hello from the edge!</span>
        </h1>
        <div class="info">
          <div class="block">
            <div class="contents">
              <span>Your city</span>
              <strong :title="info.city === '-' ? 'GeoIP information could not be derived from your IP' : null"
                :class="info.city">
                {{ info.city }}
              </strong>
            </div>
          </div>

          <div class="block">
            <div class="contents">
              <span>Your IP address</span>
              <strong>{{ info.ip }}</strong>
            </div>
          </div>
        </div>
      </main>
      <div class="debug">
        Generated at {{ generatedAt }}
      </div>
    </div>

    <footer>
      <p class="company">
        <a target="_blank" href="https://vercel.com" aria-label="Vercel">
          <svg viewBox="0 0 4438 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2223.75 250C2051.25 250 1926.87 362.5 1926.87 531.25C1926.87 700 2066.72 812.5 2239.38 812.5C2343.59 812.5 2435.47 771.25 2492.34 701.719L2372.81 632.656C2341.25 667.188 2293.28 687.344 2239.38 687.344C2164.53 687.344 2100.94 648.281 2077.34 585.781H2515.16C2518.59 568.281 2520.63 550.156 2520.63 531.094C2520.63 362.5 2396.41 250 2223.75 250ZM2076.09 476.562C2095.62 414.219 2149.06 375 2223.75 375C2298.59 375 2352.03 414.219 2371.41 476.562H2076.09ZM2040.78 78.125L1607.81 828.125L1174.69 78.125H1337.03L1607.66 546.875L1878.28 78.125H2040.78ZM577.344 0L1154.69 1000H0L577.344 0ZM3148.75 531.25C3148.75 625 3210 687.5 3305 687.5C3369.38 687.5 3417.66 658.281 3442.5 610.625L3562.5 679.844C3512.81 762.656 3419.69 812.5 3305 812.5C3132.34 812.5 3008.13 700 3008.13 531.25C3008.13 362.5 3132.5 250 3305 250C3419.69 250 3512.66 299.844 3562.5 382.656L3442.5 451.875C3417.66 404.219 3369.38 375 3305 375C3210.16 375 3148.75 437.5 3148.75 531.25ZM4437.5 78.125V796.875H4296.88V78.125H4437.5ZM3906.25 250C3733.75 250 3609.38 362.5 3609.38 531.25C3609.38 700 3749.38 812.5 3921.88 812.5C4026.09 812.5 4117.97 771.25 4174.84 701.719L4055.31 632.656C4023.75 667.188 3975.78 687.344 3921.88 687.344C3847.03 687.344 3783.44 648.281 3759.84 585.781H4197.66C4201.09 568.281 4203.12 550.156 4203.12 531.094C4203.12 362.5 4078.91 250 3906.25 250ZM3758.59 476.562C3778.13 414.219 3831.41 375 3906.25 375C3981.09 375 4034.53 414.219 4053.91 476.562H3758.59ZM2961.25 265.625V417.031C2945.63 412.5 2929.06 409.375 2911.25 409.375C2820.47 409.375 2755 471.875 2755 565.625V796.875H2614.38V265.625H2755V409.375C2755 330 2847.34 265.625 2961.25 265.625Z"
              fill="var(--fg)" />
          </svg>
        </a>
      </p>

      <p class="details">
        Built with
        <NuxtLink to="https://v3.nuxtjs.org" target="_blank">Nuxt</NuxtLink>
        on
        <NuxtLink to="https://vercel.com" target="_blank">Vercel</NuxtLink>
      </p>

      <NuxtLink target="_blank" href="#" class="source">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21226 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21226 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z"
            fill="var(--fg)" />
        </svg>
        Source
      </NuxtLink>
    </footer>
  </div>
</template>
