<script setup>
import { gsap } from "gsap";
import Socials from "./components/Socials.vue";
import photo from "./assets/moonmoon.png";
const copyContractAddress = () => {
    const contractAddress = "74nPdqGQGXgy1PFiDJo43rs4D2m6gPRvudbRwZofCcB5";
    navigator.clipboard.writeText(contractAddress);
    // alert("Contract address copied to clipboard!");
};

document.addEventListener("DOMContentLoaded", function () {
    const flyingImages = document.querySelectorAll(".flying-image");

    flyingImages.forEach((image) => {
        gsap.set(image, {
            x: gsap.utils.random(0, window.innerWidth),
            y: gsap.utils.random(0, window.innerHeight),
            rotation: gsap.utils.random(0, 360),
        });

        const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
            onComplete: () => {
                tl.invalidate().restart();
            },
        });

        tl.to(image, {
            duration: gsap.utils.random(2, 5),
            x: gsap.utils.random(0, window.innerWidth),
            y: gsap.utils.random(0, window.innerHeight),
            rotation: "+=360",
            scale: gsap.utils.random(0.5, 1.5),
            ease: "power1.inOut",
        });
    });
});
</script>

<template>
    <div
        class="w-screen min-h-screen bg-base-100 flex items-center justify-center"
    >
        <main class="prose font-custom1 flex flex-col items-center">
            <h1>$MOONMOON</h1>
            <h2>The dumbest dog on the internet</h2>
            <Socials />
            <img :src="photo" alt="moonmoon" width="500px" height="500px" />
            <p>retarded good vibes token</p>
            <div
                class="text-xs lg:text-xl font-bold text-accent flex items-center gap-4"
            >
                <span>74nPdqGQGXgy1PFiDJo43rs4D2m6gPRvudbRwZofCcB5</span>
                <svg
                    class="w-4 h-4 lg:w-16 lg:h-16 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-95"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="copyContractAddress"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                        ></path>
                        <path
                            d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
                            stroke="currentColor"
                            stroke-width="1.5"
                        ></path>
                    </g>
                </svg>
            </div>
            <a href="https://www.dailydot.com/unclick/moon-moon-memes/"
                >Read More About Moon Moon</a
            >
        </main>
    </div>
    <div class="flying-images">
        <img
            v-for="i in 10"
            :index="i"
            :src="photo"
            alt="Flying Image 1"
            class="flying-image"
            height="500px"
            width="500px"
        />
    </div>
</template>

<style>
.flying-images {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
}

.flying-image {
    position: absolute;
    width: 100px; /* Adjust the size of the images as needed */
    height: auto;
}
</style>
