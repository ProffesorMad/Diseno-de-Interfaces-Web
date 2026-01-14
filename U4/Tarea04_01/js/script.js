$(document).ready(function () {

    let video = $("#videoLibro")[0];

    $("#playPause").click(function () {
        video.paused ? video.play() : video.pause();
    });

    $("#reiniciar").click(function () {
        video.currentTime = 0;
        video.play();
    });

    $("#volumen").on("input", function () {
        video.volume = $(this).val();
    });

    $("#comprar").click(function () {
        let nombre = $("#nombre").val();
        let libro = $("#libro").val();
        let email = $("#email").val();

        if (!nombre || !libro || !email) {
            alert("Completa todos los campos");
            return;
        }

        $("#mensajeConfirmacion").html(
            `<p>Gracias ${nombre}, tu pedido del libro "${libro}" ha sido registrado.</p>`
        );

        $("#formCompra").fadeOut();
    });

});
