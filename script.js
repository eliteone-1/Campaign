// slider.js
function slider() {
  return {
    active: 0,

    slides: [
      {
        image: 'https://tse3.mm.bing.net/th/id/OIP.hnKKbdRD5US3XIiDs37wFgHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        alt: 'Slide 1',
        content: `
          <h1 class="text-3xl md:text-5xl font-bold">Vote✅ <br/> Hon. <span class="text-red-500">Prince Joe Okojie</span> <br/> 
          for Senate</h1>
          <p class="text-lg md:text-xl max-w-xl mt-4">
            Lorem ipsum <strong>dolor sit amet</strong>, consectetur adipiscing elit. <br/>
            Support a better future for Edo.
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        `, 
      },
      {
        image: 'https://imageio.forbes.com/specials-images/imageserve/64f0519cfc38d613e2f3948e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
        alt: 'Technology innovation',
        content: `
          <h1 class="text-3xl md:text-5xl font-bold">Innovation at the Core</h1>
          <p class="text-lg md:text-xl max-w-xl mt-4">
            Driven by ideas, backed by experience.
          </p>
        `
      },
      {
        image: 'https://www.1stformationsblog.co.uk/wp-content/uploads/2023/12/Shutterstock_477860680.jpg',
        alt: 'Growth',
        content: `
          <h1 class="text-3xl md:text-5xl font-bold">Let us grow together</h1>
          <p class="text-lg md:text-xl max-w-xl mt-4">
            Let us help you reach your goals.
          </p>
        `
      }, 

    {
        image: 'https://imageio.forbes.com/specials-images/imageserve/64f0519cfc38d613e2f3948e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
        alt: 'Technology innovation',
        content: `
          <h1 class="text-3xl md:text-5xl font-bold">Key Achievements</h1>
          <p class="text-lg md:text-5xl max-w-xl mt-4">
            →→→
          </p>
        `
      },
    {
        image: 'https://th.bing.com/th/id/R.8cd074f4df5d7f6095516ae14ed3158b?rik=PNSSCBFYzxPLxg&pid=ImgRaw&r=0',
        alt: 'Technology innovation',
        content: `
          <h1 class="text-3xl md:text-5xl font-bold">50+ Boreholes.</h1>
          <p class="text-lg md:text-xl max-w-xl mt-4">
            Provided clean water across 30 communities.
          </p>
        `
      },
    {
        image: 'https://tse3.mm.bing.net/th/id/OIP.sxkYd0fxdjrOsA3ZU86_0AHaEx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        alt: 'Education innovation',
        content: `
          <h1 class="text-3xl md:text-5xl font-bold">15 Schools Renovated.</h1>
          <p class="text-lg md:text-xl max-w-xl mt-4">
            Ensuring children learn in safe environments.
          </p>
        `
      },
    {
        image: 'https://www.publichealth.com.ng/wp-content/uploads/2017/10/health-in-Nigeria.jpg',
        alt: 'Healthcare innovation',
        content: `
          <h1 class="text-3xl md:text-5xl font-bold">Healthcare Access.</h1>
          <p class="text-lg md:text-xl max-w-xl mt-4">
            Improved healthcare facilities in 20 communities.
          </p>
        `
      },
    ],


    start() {
      this.interval = setInterval(() => {
        this.next();
      }, 5000);
    },

    next() {
      this.active = (this.active + 1) % this.slides.length;
    },

    prev() {
      this.active = (this.active - 1 + this.slides.length) % this.slides.length;
    },

    stop() {
      clearInterval(this.interval);
    }
  };
}

window.slider = slider;
