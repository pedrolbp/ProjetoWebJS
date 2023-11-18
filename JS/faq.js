const buttons = document.querySelectorAll(".toggle-button");
const paragraphs = document.querySelectorAll(".faq-list li p");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        paragraphs.forEach((paragraph, subIndex) => {
            if (index === subIndex) {
                paragraph.classList.toggle("active");
                const icon = button.querySelector("i");
                if (paragraph.classList.contains("active")) {
                    icon.classList.remove("fa-plus");
                    icon.classList.add("fa-minus");
                } else {
                    icon.classList.remove("fa-minus");
                    icon.classList.add("fa-plus");
                }
            } 
        });
    });
});