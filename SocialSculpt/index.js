// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

// Get references to the MESSAGES elements
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// Get reference to the Root elements
var root = document.querySelector(":root");

// Remove active class for all menu items
const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};

// Get references to the THEMES elements
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

// Get reference to the font customization options
const fontSizes = document.querySelectorAll(".choose-size span");

// Get reference to the primary colors
const colorPalette = document.querySelectorAll(".choose-color span");

// Get reference to the background colors
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

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

// ========== THEME CUSTOMIZATION ==========

// Opens Modal
const openModal = () => {
    themeModal.style.display = "grid";
};

const closeModal = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none";
    }
};

theme.addEventListener("click", openModal);

themeModal.addEventListener("click", closeModal);

// =============== FONTS ===============

// Remove active class from font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach((size) => {
        size.classList.remove("active");
    });
};

fontSizes.forEach((size) => {
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");

        if (size.classList.contains("font-size-1")) {
            fontSize = "12px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "14px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "-7rem");
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
            root.style.setProperty("--sticky-top-left", "-2rem");
            root.style.setProperty("--sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "18px";
            root.style.setProperty("--sticky-top-left", "-5rem");
            root.style.setProperty("--sticky-top-right", "-25rem");
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "22px";
            root.style.setProperty("--sticky-top-left", "-12rem");
            root.style.setProperty("--sticky-top-right", "-35rem");
        }
        // Change font size of the root html element
        document.querySelector("html").style.fontSize = fontSize;
    });
});

// Change Primary Color

// Remove active class from color selectors
const removeColorSelector = () => {
    colorPalette.forEach((color) => {
        color.classList.remove("active");
    });
};

colorPalette.forEach((color) => {
    color.addEventListener("click", () => {
        removeColorSelector();
        let primaryHue;
        color.classList.toggle("active");

        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202;
        }
        // Change color of the root html element
        root.style.setProperty("--primary-color-hue", primaryHue);
    });
});

// Background color

// Background theme values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Change Background color
const changeBG = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

bg1.addEventListener("click", () => {
    darkColorLightness = "17%";
    whiteColorLightness = "100%";
    lightColorLightness = "95%";

    // Remove active class
    bg2.classList.remove("active");
    bg3.classList.remove("active");

    // Add active class
    bg1.classList.add("active");
    changeBG();
});

bg2.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    // Remove active class
    bg1.classList.remove("active");
    bg3.classList.remove("active");

    // Add active class
    bg2.classList.add("active");
    changeBG();
});

bg3.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    // Remove active class
    bg2.classList.remove("active");
    bg1.classList.remove("active");

    // Add active class
    bg3.classList.add("active");
    changeBG();
});
