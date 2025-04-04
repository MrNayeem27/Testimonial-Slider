const testimonials = [
    {
        id: 1,
        name: "Jhon",
        testimonial: "This service is fantastic! Highly recommended for everyone.",
        img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png",
    },
    {
        id: 2,
        name: "Pradeep",
        testimonial: "A game-changer for my workflow. So easy to use!",
        img: "https://static.vecteezy.com/system/resources/previews/048/216/761/non_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png",
    },
    {
        id: 3,
        name: "Priyanka",
        testimonial: "Excellent customer support and a wonderful product.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNbSs4HzxCcXAOOrZnlQxIj1U5vkq4rA-IQ&s",
    },
    {
        id: 4,
        name: "Arul",
        testimonial: "I couldn't be happier with the results. Simply amazing.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2U2akySBgSHUK-foX-9SGFmLk6zEuGYNNqw&s",
    },
    {
        id: 5,
        name: "Arulmozhi",
        testimonial: "Five stars! Made a significant difference for our team.",
        img: "https://i.pinimg.com/564x/5b/24/05/5b240570be0c2e94d54d4c33cd930df7.jpg",
    }
];

const containerEl = document.querySelector(".testimonial-container");
const imgEl = document.querySelector(".testimonial-image");
const textEl = document.querySelector(".testimonial-text");
const usernameEl = document.querySelector(".testimonial-username");

let idx = 0;
const updateInterval = 4000;
const fadeTime = 500;

function updateTestimonial() {
    if (!containerEl || !imgEl || !textEl || !usernameEl) {
        console.error("One or more testimonial elements not found!");
        return;
    }

    containerEl.classList.add("fade-out");

    setTimeout(() => {
        const { name, testimonial, img } = testimonials[idx];

        imgEl.src = img;
        imgEl.alt = `Photo of ${name}`;
        textEl.textContent = testimonial;
        usernameEl.textContent = name;

        containerEl.classList.remove("fade-out");

        idx++;
        if (idx >= testimonials.length) {
            idx = 0;
        }

        setTimeout(updateTestimonial, updateInterval);

    }, fadeTime);
}

setTimeout(updateTestimonial, 50);