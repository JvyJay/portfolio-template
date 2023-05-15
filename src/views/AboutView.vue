<template>
  <div>
    <!-- HERO AREA -->
    <!-- DESKTOP VISIBILITY-->
    <section data-aos="zoom-right" class="container-fluid d-flex justify-content-center w-50 d-none d-xl-block d-lg-block d-md-block d-sm-none my-5">
      <div class="d-flex flex-column align-items-lg-start align-items-center text-lg-start text-center">
        <span class="span-color">About/Services</span>
        <h1 class="fw-bold"><span class="outline-text">Hi! I'm John Doe </span>I`m Creating Creative Apps
        With Sleek UX/UI</h1>
      </div>
    </section>
    <!-- TABLET/MOBILE VISIBILITY -->
    <section data-aos="zoom-right" class=" container-fluid d-flex justify-content-center w-50 d-xl-none d-lg-none d-md-none my-5">
      <div class="d-flex flex-column align-items-lg-start align-items-center text-lg-start text-center">
        <span class="span-color">About/Services</span>
        <h2 class="fw-bold"><span class="outline-text">Hi! I'm John Doe </span>I`m Creating Creative Apps
        With Sleek UX/UI</h2>
      </div>
    </section>
    <!-- HERO AREA END -->

    <!-- ABOUT -->
    <section class="container-fluid">
      <!-- TOP SECTION -->
      <!-- DESKTOP VISIBILITY -->
      <div class="d-none d-xl-block d-lg-block d-md-none my-5">
        <div class="container d-flex flex-row justify-content-center align-items-center m-5">
          <div class="d-flex flex-column w-25 mx-4">
            <h4 data-aos="fade-right" class="fw-medium">UI Developer Hailing from Seattle, WA</h4>
            <p data-aos="fade-up" class="grey-text">My experience comes from working with companies to solve problems on their online presence and help them ship redesign, alpha products or new features. One of my goals during a project is to make sure we that our vision is aligned by documenting and communicating about the process.</p>
          </div>
          <img data-aos="fade-left" class="img-fluid" width="25%" :src=profile alt="Profile Photo" />
        </div>
      </div>
      <!-- TABLET/ MOBILE VISIBILITY -->
      <div data-aos="fade-up" class="d-flex flex-column justify-content-center align-items-center mx-auto d-xl-none d-lg-none">
        <img data-aos="fade-down" class="img-fluid" width="50%" :src=profile alt="Profile Photo" />
        <div data-aos="fade-up" class="d-flex flex-column text-center w-75 m-5">
          <h4 class="fw-medium">UI Developer Hailing from Seattle, WA</h4>
          <p class="grey-text">My experience comes from working with companies to solve problems on their online presence and help them ship redesign, alpha products or new features. One of my goals during a project is to make sure we that our vision is aligned by documenting and communicating about the process.</p>
        </div>
      </div>
      <!-- DESKTOP VISIBILITY -->
      <!-- BOTTOM SECTION -->
      <div class="d-none d-xl-block d-lg-block d-md-none">
        <div class="d-flex flex-row justify-content-center align-items-center container">
        <!-- SERVICE CARD -->
        <div data-aos="flip-left" class="d-flex flex-column justify-content-start align-items-start colored-card w-25 mx-5 p-4 text-dark">
          <h2 class="fw-bold">Services</h2>
          <p>Over the years, I helped companies from startups to large corporations in developing their online business. I`ve worked on a wide variety of projects both on-site & remote</p>
          <div class="d-flex flex-wrap flex-row">
              <div>
                <h5 class="fw-medium">&#x2022; Marketing</h5>
                <p>Making sure SEO & website is suited towards your market place</p>
              </div>
              <div>
                <h5 class="fw-medium">&#x2022; UI/UX</h5>
                <p>Top notch UI design system with user experience taking precedence </p>
              </div>
              <div>
                <h5 class="fw-medium">&#x2022; Branding</h5>
                <p>From graphics to psychology based color selection your brand with stand out</p>
              </div>
              <div>
                <h5 class="fw-medium">&#x2022; Development</h5>
                <p>Tying it all together with simple, fast & intuitive coding</p>
              </div>
            </div>
          </div>
          <!-- GITHUB/RESUME LINKS -->
          <div data-aos="flip-right" class="d-flex flex-column justify-content-center align-items-center text-center">
            <div>
              <img class="m-2" width="50%" :src=resumeicon alt="Resume Icon" />
              <h4 class="fw-medium">Past Work</h4>
              <p class="grey-text">Curious about my other work?</p>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center">
              <button class="secondary-button m-2">Github</button>
              <button class="secondary-button m-2">Resume</button>
            </div>
          </div>
        </div>
      </div>

      <!-- TABLET/MOBILE DESIGN-->
      <div class="d-xl-none d-lg-none">
        <div class="d-flex flex-column justify-content-center align-items-center container">
        <!-- SERVICE CARD -->
        <div data-aos="flip-right" class="d-flex flex-column justify-content-start align-items-start colored-card mx-auto p-4 text-dark">
          <h4 class="fw-bold">Services</h4>
          <p>Over the years, I helped companies from startups to large corporations in developing their online business. I`ve worked on a wide variety of projects both on-site & remote</p>
          <div class="d-flex flex-wrap flex-column">
            <div>
              <h6 class="fw-medium">&#x2022; Marketing</h6>
              <p>Making sure SEO & website is suited towards your market place</p>
            </div>
            <div>
              <h6 class="fw-medium">&#x2022; UI/UX</h6>
              <p>Top notch UI design system with user experience taking precedence </p>
            </div>
            <div>
              <h6 class="fw-medium">&#x2022; Branding</h6>
              <p>From graphics to psychology based color selection your brand with stand out</p>
            </div>
            <div>
              <h6 class="fw-medium">&#x2022; Development</h6>
              <p>Tying it all together with simple, fast & intuitive coding</p>
            </div>
          </div>
        </div>
        <!-- GITHUB/RESUME LINKS -->
        <div data-aos="flip-left" class="d-flex flex-column justify-content-center align-items-center text-center mt-5">
          <div>
            <img class="m-2" width="50%" :src=resumeicon alt="Resume Icon" />
            <h4 class="fw-medium">Past Work</h4>
            <p class="grey-text">Curious about my other work?</p>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <button class="secondary-button m-2">Github</button>
            <button class="secondary-button m-2">Resume</button>
          </div>
        </div>
      </div>
      </div> 
    </section>
    <!-- ABOUT END -->

    <!-- BELIEFS & VISION SECTION -->
    <!-- DESKTOP VISIBILITY -->
    <section class="container my-5 d-none d-xl-block d-lg-block d-md-block d-sm-none">
      <div class="d-flex justify-content-center align-items-start flex-column">
        <div class="d-flex flex-column justify-content-start align-items-start">
          <h2 data-aos="fade-right"><span class="outline-text">Beliefs & Vision</span></h2>
          <h4 data-aos="fade-left" class="text-start w-50 m-2">Customized strategy & coordination for your specific needs</h4>
        </div>
        <div class="d-flex flex-row justify-content-center align-items-start my-4">
          <ProcessCard
          data-aos="zoom-in-down"
          v-for="process in processes"
          :key="process.id"
          :image="process.image"
          :title="process.title"
          :desc="process.desc"
          />
        </div>
      </div>
    </section>

    <!-- MOBILE/TABLET VISIBILITY -->
    <section class="container my-5 d-xl-none d-lg-none d-md-none">
      <div class="d-flex justify-content-start align-items-start flex-column">
        <div class="d-flex flex-column justify-content-start align-items-start">
          <h2 data-aos="fade-right"><span class="outline-text">Beliefs & Vision</span></h2>
          <h4 data-aos="fade-left" class="text-start w-50 my-2">Customized strategy & coordination for your specific needs</h4>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center my-4">
          <ProcessCard
          data-aos="zoom-in-down"
          v-for="process in processes"
          :key="process.id"
          :image="process.image"
          :title="process.title"
          :desc="process.desc"
          />
        </div>
      </div>
    </section>
    <!-- BELIEFS & VISION SECTION END -->

    <!-- CONTACT SECTION -->
    <section class="my-5 container">
      <div class="d-flex flex-column justify-content-md-start align-items-md-start justify-content-center align-items-center m-5 text-md-start text-center">
        <span data-aos="fade-right" class="span-color mb-2">Contact</span>
        <h2 data-aos="fade-up" class="fw-medium">Let's Get Started</h2>
        <p data-aos="fade-up" class="grey-text w-75">I`m open to any kind of work from freelance to remote. Feel free to reach out if you also need some tips or pointers as in your business development.</p>
        <button data-aos="fade-up" class="primary-button">
            <img width="10%" :src=mail alt="Mail Icon" />
            contact@gmail.com
        </button>
      </div>
    </section>
    <!-- CONTACT SECTION END -->
    
    <!-- FOOTER  -->
    <FooterNav />
  </div>
</template>

<script>
// IMAGES/ICONS
import cube1 from '../assets/cube1.svg';
import cube2 from '../assets/cube2.svg';
import cube3 from '../assets/cube3.svg';
import cube4 from '../assets/cube4.svg';
import profile from '../assets/profile.jpg';
import resumeicon from '../assets/resume-icon.svg';
import mail from '../assets/mail.svg';
// COMPONENTS
import ProcessCard from '../components/Process-Card.vue';
import FooterNav from '../components/FooterNav.vue';
    export default {
      name: 'AboutView',
      components: {
        ProcessCard,
        FooterNav
      },
      data() {
        return {
          // IMAGE DATA
          profile: profile,
          resumeicon: resumeicon,
          mail: mail,
          // PROCESS DATA
          processes: [
            {
              id: 1,
              image: cube1,
              title: 'Research',
              desc: `Gathering information's about your product and his goals. Researching your industry and competitors.`
            },
            {
              id: 2,
              image: cube2,
              title: 'Strategies',
              desc: `Turning the research into a solution that will meet your goals and will be efficient for your users.`
            },
            {
              id: 3,
              image: cube3,
              title: 'Design',
              desc: `Combining the form and the function to make sure your user have a delightful experience.`
            },
            {
              id: 4,
              image: cube4,
              title: 'Develop',
              desc: `Following with the development to ensure that nothing was left on the side.`
            },
          ]
        }
      }
    }
  </script>

  <style scoped>
  
  </style>