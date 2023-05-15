<template>
    <div>
        <footer>
            <div class="d-flex flex-md-row justify-content-center align-items-center flex-column w-100">
                <div>
                    <hr />
                    <div class="d-flex flex-row justify-content-center align-items-center">
                        <a class="m-0 text-white text-center" href="https://github.com/" target="_blank"><img width="25%" alt="Github" :src='github' />GitHub</a>
                        <a class="m-0 text-white text-center" href="https://twitter.com/" target="_blank"><img width="25%" alt="Twitter" :src='twitter' />Twitter</a>
                        <a class="m-0 text-white text-center" href="https://www.linkedin.com/" target="_blank"><img width="25%" alt="Linkedin" :src='linkedin' />Linkedin</a>
                    </div>
                    <hr />
                </div>
                    <img width="125px" :src=logo class="img-fluid" alt="Logo" />
                <div>
                    <hr />
                    <div class="d-flex flex-row justify-content-center align-items-center">
                        <p class="m-0">© 2023 Web Projects | contact@gmail.com</p>
                    </div>
                    <hr />
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
// IMAGES
import logo from '../assets/logo2.png';
import github from '../assets/GitHub.svg';
import twitter from '../assets/Twitter.svg';
import linkedin from '../assets/LinkedIn.svg';
export default {
    name: 'FooterNav',
    data() {
        return {
            logo: logo,
            github: github,
            twitter: twitter,
            linkedin: linkedin
        }
    }
}
</script>
<style lang="">
    
</style>