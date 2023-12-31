// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");

// remove active class for all menu items
const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};

// add active class for the clicked item
menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");

        const notificationsPopup = document.querySelector(
            ".notifications-popup"
        );
        const notificationCount = document.querySelector(
            "#notifications .notification-count"
        );

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

// Messages
messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display =
        "none";

    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});
