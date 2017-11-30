    $(document).ready(function () {

        var slideIndex = 1;
        var autoSlide = true;
        showSlides(slideIndex);
        setInterval(slideShow, 5000);
        setInterval(setAutoSlide, 10000);

        function plusSlide(n) {
            slideIndex += n;
            autoSlide = false;
            showSlides(slideIndex)
        }

        function slideShow() {
            if (autoSlide === true) {
                slideIndex++;
                showSlides(slideIndex);
            }
        }

        function showSlides(n) {
            var slides = $('.slides');
            var dots = $('.dot');
            if (n > $('.slides').length) { slideIndex = 1 }
            if (n < 1) { slideIndex = $('.slides').length }
            $('.slides').css("display", "none");
            $('#fade').removeAttr("id");
            $('.dot').attr('id', '');
            slides[slideIndex - 1].style.display = "block";
            slides[slideIndex - 1].id = "fade";
        }

        function currentSlide(n) {
            autoSlide = false;
           showSlides(slideIndex = n)
           
       }

        function setAutoSlide() {
            autoSlide = true;
        }


        $('.prev').click(function() {
            plusSlide(-1);

        });

        $('.next').click(function() {
            plusSlide(1);
        });

        $('.dot').click(function (e) {
            slideNum = e.target.className.split(' ')[1];
            currentSlide(Number(slideNum));
        })


    });