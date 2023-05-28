const Modal = () => {
  const openPopUp = document.getElementById("open-pop-up");
  const closePopUp = document.getElementById("pop-up__close");
  const popUp = document.getElementById("pop-up");
  const utVideo = document.querySelector('.ut-video')

  openPopUp.addEventListener("click", function (e) {
    e.preventDefault();
    popUp.classList.add("active");
    utVideo.classList.remove('none')
  });

  closePopUp.addEventListener("click", () => {
    popUp.classList.remove("active");
    utVideo.classList.add('none')
  });
};

export default Modal;


