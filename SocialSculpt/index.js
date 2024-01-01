// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// Remove active class for all menu items
const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};

// Add active class for the clicked item
menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Remove active class from all menu items
        changeActiveItem();

        // Add active class to the clicked item
        item.classList.add("active");

        // Get references to notifications popup and notification count element
        const notificationsPopup = document.querySelector(
            ".notifications-popup"
        );
        const notificationCount = document.querySelector(
            "#notifications .notification-count"
        );

        // Toggle display of notifications popup and notification count
        if (item.id !== "notifications") {
            notificationsPopup.style.display = "none";
            notificationCount.style.display = "block";
        } else {
            notificationsPopup.style.display =
                notificationsPopup.style.display === "block" ? "none" : "block";

            notificationCount.style.display =
                notificationsPopup.style.display === "block" ? "none" : "block";
        }
    });
});

// ================ MESSAGES ===============

// Search chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);

    // Iterate through each message card
    message.forEach((chat) => {
        // Get the lowercase name from the h5 element
        let name = chat.querySelector("h5").textContent.toLowerCase();

        // Check if the search value is present in the name
        if (name.indexOf(val) !== -1) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    });
};

// Search chat
messageSearch.addEventListener("keyup", searchMessage);

// Highlight messages card when messages menu item is clicked
messagesNotification.addEventListener("click", () => {
    // Add a temporary box shadow to the messages container when messages menu item is clicked
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";

    // Hide the notification count after clicking on the messages notifications
    messagesNotification.querySelector(".notification-count").style.display =
        "none";

    // Remove the box shadow after a delay
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});

