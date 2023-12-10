const handleMenuToggle = (e) => {
  e.preventDefault();
  const menu = document.querySelector(".menu");
  menu.classList.toggle("menu--open");
  if (menu.classList.contains("menu--open")) {
    menu.classList.remove("menu--closed");
  } else {
    menu.classList.add("menu--closed");
  }
};
const handleOpenDialog = (e) => {
  const dialog = document.querySelector("#register-announcement-dialog");
  dialog.showModal();
};
const handleCloseDialog = (e) => {
  const dialog = document.querySelector("#register-announcement-dialog");
  dialog.close();
};
const menuButton = document.querySelector("#nav-button");
menuButton.addEventListener("click", handleMenuToggle);
const openDialogButton = document.querySelector(
  "#register-announcement-button"
);
const closeDialogButton = document.querySelector(
  "#announcement-close-button"
);
openDialogButton.addEventListener("click", handleOpenDialog);
closeDialogButton.addEventListener("click", handleCloseDialog);
