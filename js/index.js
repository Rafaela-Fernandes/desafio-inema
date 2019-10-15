 $(document).ready(function() {

            // Script de animaca do menu quando mobile
            $(".navbar-toggler").click(function() {

                $("#nav-inema").toggle("slide", {
                    direction: "right"
                }, 700)
            })

            $("#nav-inema a").click(function() {
                $("#nav-inema").hide('fade')

            })
        })