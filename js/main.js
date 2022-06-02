$(window).on("load", function () {
  $(".loader-slide").addClass("open");
});

$(".openbtn1").click(function () {
  $(this).toggleClass("active");
  $("#g-nav").toggleClass("panelactive");
  $(".circle-bg").toggleClass("circleactive");
});

$("#g-nav a").click(function () {
  $(".openbtn1").removeClass("active");
  $("#g-nav").removeClass("panelactive");
  $(".circle-bg").removeClass("circleactive");
});

function scan(hoge, setting) {
  const target = hoge === undefined ? ".animation-box" : hoge;
  const add = setting === undefined ? "active" : setting;

  const targets = [].slice.call(document.querySelectorAll(target));
  const options = {
    root: null,
    rootMargin: "0px 0px -50%",
    threshold: 0,
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(function (target) {
    observer.observe(target);
  });

  function callback(entries, object) {
    entries.forEach(function (entry, i) {
      if (!entry.isIntersecting) return;
      const item = entry.target;
      animation(item);
      object.unobserve(item);
    });
  }

  function animation(target) {
    if (!target.classList.contains(add)) {
      target.classList.add(add);
    }
  }
}
