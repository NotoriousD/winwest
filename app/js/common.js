$(function () {
  $(".profit__descr").fadeIn(1500, "swing");
  $(".profit__form").fadeIn(1500, "swing");

  $("#pagepiling").pagepiling({
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "lastPage"],
    menu: "#myMenu",
    afterLoad: function (anchorLink, index) {
      if (index == 1) {
        $(".firstLink").fadeIn(600, "swing");
        $(".secondLink").fadeIn(800, "swing");
        $(".thirdLink").fadeIn(1000, "swing");
        $(".fourthLink").fadeIn(1200, "swing");
        $(".lastLink").fadeIn(1400, "swing");
      }
    },
    onLeave: function (index, nextIndex, direction) {
      //after leaving section 2
      if (nextIndex == 2) {
        setTimeout(() => {
          $(".winvest__top").fadeIn(1100, "swing");
          $(".winvest__bottom").fadeIn(1400, "swing");
        }, 200);
      }

      if (nextIndex == 3) {
        setTimeout(() => {
          $(".what__top").fadeIn(800, "swing");
          $(".what__bottom").fadeIn(1600, "swing");
        }, 500);
      }
      if (nextIndex == 4) {
        const list = $(".people__item");
        setTimeout(() => {
          $(".people__title").fadeIn(1200, "swing");
        }, 500);
      }
      if (nextIndex == 5) {
        setTimeout(() => {
          $(".reg__cerf").fadeIn(1000, "swing");
          $(".reg__form").fadeIn(1400, "swing");
        }, 500);
      }
    },
  });

  class StepForm {
    constructor() {
      this.step = 1;
      this.controls = $(".profit__form-controls");
      this.sbt = $(".profit__form-sbt");
      this.nextBtn = $(".profit__next");
      this.prevBtn = $(".profit__prev");
      this.sections = $(".profit__form-section");
      this.length = this.sections.length;
    }
    start() {
      $(Array.from(this.sections)[0]).addClass("active");
      if (!$(this.prevBtn).hasClass("hidden")) {
        $(this.prevBtn).addClass("hidden");
      }
      if (!$(this.sbt).hasClass("hidden")) {
        $(this.sbt).addClass("hidden");
      }
      $(".profit__form-content").height(
        `${$(Array.from(this.sections)[0]).addClass("active").height() + 30}`
      );
      /* $(this.nextBtn).attr("disabled", "disabled"); */
    }
    update() {
      Array.from(this.sections).map((section) => {
        const id = $(section).attr("data-id");
        if (+id === this.step) {
          $(section).addClass("active");
        } else {
          $(section).removeClass("active");
          console.log("hidden");
        }
      });
      if (this.step === this.length) {
        /* if (!$(this.controls).hasClass("hidden")) {
          $(this.controls).addClass("hidden");
        } */
        if ($(this.sbt).hasClass("hidden")) {
          $(this.sbt).removeClass("hidden");
        }
        if (!$(this.nextBtn).hasClass("hidden")) {
          this.nextBtn.addClass("hidden");
        }
      } else {
        if ($(this.controls).hasClass("hidden")) {
          $(this.controls).removeClass("hidden");
        }
        if (!$(this.sbt).hasClass("hidden")) {
          $(this.sbt).addClass("hidden");
        }
        if ($(this.nextBtn).hasClass("hidden")) {
          $(this.nextBtn).removeClass("hidden");
        }
      }
      if (this.step > 1) {
        if ($(this.prevBtn).hasClass("hidden")) {
          $(this.prevBtn).removeClass("hidden");
        }
      }
      if (this.step === 1) {
        if (!$(this.prevBtn).hasClass("hidden")) {
          $(this.prevBtn).addClass("hidden");
        }
      }
      console.log(this.step);
    }
    next() {
      if (this.step < this.length) {
        this.step = this.step + 1;
      }
      this.update();
    }
    prev() {
      if (this.step >= 1) {
        this.step = this.step - 1;
      }
      this.update();
    }
  }

  const step = new StepForm();

  step.start();

  if (step instanceof StepForm) {
    $(".profit__prev").on("click", (e) => {
      e.preventDefault();
      step.prev();
    });
    $(".profit__next").on("click", (e) => {
      e.preventDefault();
      step.next();
    });
  }
});
