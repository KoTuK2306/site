$(document).ready(function() {
  const body = document.querySelector('body');
  const searchParentNode = (block, needed) => {
    if (body.querySelector(needed) === null) {
      return null
    };
    let parentEl = block.parentElement;
    let needEl = parentEl.querySelector(needed);
    if (needEl === null) {
        return searchParentNode(parentEl, needed)
    }
    return needEl;
  }
  const socialiconsArr = document.querySelectorAll('.socialicons');
  socialiconsArr.forEach(item => {
      let likeBtn = item.querySelector('.like'),
          countBlock = item.querySelector('.count');
      
      likeBtn.addEventListener('click', () => {
        let countNum = +countBlock.textContent;
        if(likeBtn.getAttribute('data-active') === 'false') {
          likeBtn.setAttribute('data-active', 'true');
          likeBtn.classList.add('active');
          countBlock.textContent = countNum + 1;
        }else if(countNum !== 0) {
          likeBtn.setAttribute('data-active', 'false');
          likeBtn.classList.remove('active');
          countBlock.textContent = countNum - 1;
        }
      })
  });
  $(window).scroll(function() {
    $(".mov").each(function() {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 700) {
        $(this).addClass("fadeInLeft");
      }
      $(".move").each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 730) {
          $(this).addClass("fadeInDown");
        }
      });
    });
  });
  $(".spoiler__button").click(function(event) {
    $(".spoiler").toggleClass("spoiler__item");
    $(this).toggleClass("active");
  });
  $(".profile__text").click(function(event) {
    $("body").css("overflow-y", "hidden");
    $(".profile__window").toggleClass("clicked4");
  });
  $(".button").click(function(event) {
    $("body").css("overflow-y", "visible");
    $(".profile__window").removeClass("clicked4");
  });
  $(".cross").click(function(event) {
    $("body").css("overflow-y", "visible");
    $(".profile__window").removeClass("clicked4");
  });
  const imagesbox__item2 = document.querySelectorAll(".imagesbox__item");
  imagesbox__item2.forEach(item => {
  let socialicons = item.querySelector(".socialicons"),
      share = socialicons.querySelector(".share"),
      imagesbox__item3 = item.querySelector(".imagesbox__item3");
  item.addEventListener("mouseenter", () => {
    socialicons.classList.remove('hidden');
  });
  item.addEventListener("mouseenter", () => {
    socialicons.classList.remove('hidden');
  });
  item.addEventListener("mouseleave", () => {
      imagesbox__item3.classList.add('hidden');
      socialicons.classList.add('hidden');
  });
  item.addEventListener("click", e => {
      let parentShare = searchParentNode(e.target, 'share');
      if (!parentShare.classList.contains('share')) {
          imagesbox__item3.classList.add("hidden");
          socialicons.classList.remove("hidden");
      }
  });
  share.addEventListener("click", () => {
    socialicons.classList.add("hidden");
    imagesbox__item3.classList.remove("hidden");
  });
  });
  var linkNav = document.querySelectorAll('[href^="#"]'),
  V = 0.7;
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener(
    "click",
    function(e) {
      e.preventDefault();
      var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, "$1");
      (t = document.querySelector(hash).getBoundingClientRect().top - 30),
        (start = null);
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
          r =
            t < 0
              ? Math.max(w - progress / V, w + t)
              : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    },
    false
  );
};
});