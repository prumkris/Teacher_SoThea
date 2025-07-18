const buttons = document.querySelectorAll(".show");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const container = button.closest(".student_container");
        const message = container.querySelector(".msg_to");

        if (message.classList.contains("hidden")) {
            message.classList.remove("hidden");
            container.classList.add("expanded");
            button.innerText = "លាក់សារ"; // Hide message
        } else {
            message.classList.add("hidden");
            container.classList.remove("expanded");
            button.innerText = "បង្ហាញសារ"; // Show message
        }
    });
});