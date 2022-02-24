// grab what we need
const accordion = document.querySelector(".accordion");
const items = accordion.querySelectorAll("li");
const question = accordion.querySelectorAll(".question");

function toggleAccordion() {
    const thisItem = this.parentNode;

    items.forEach((item) => {
        if (thisItem == item) {
            thisItem.classList.toggle("open");
            return;
        }
        item.classList.remove("open");
    });
}
question.forEach((question) =>
    question.addEventListener("click", toggleAccordion)
);
