$(function(){
    $(".btn-menu").click(function(){
        $(".menu").show();
        $(".carousel").hide();
        $(".slide").hide();
        $(".conteiner").hide();
        $(".search-box").hide();
    });
    $(".btn-close").click(function(){
        $(".menu").hide();
        $(".carousel").show();
        $(".slide").show();
        $(".conteiner").show();
        $(".search-box").show();
    });

    // pagina user -> script para add sensor ao usuario
    $('.add').on('click', function(){
        $('.addSensor').slideToggle();        
    });
});


var options = {
    title: {
        display : true,
        fontSize: 20,
        text: "Corrente (A)",
        fontColor: "#fff"
    },
    scales:
    {
        xAxes: [{
            display: true,
            gridLines: {
            color: "rgba(255,255,255,0.1)",
            zeroLineColor:"rgba(255,255,255,1)"
            },
            ticks: {
            beginAtZero: true,
            fontColor: "#fff"
            }
        }],
        yAxes: [{
            display: true,
            gridLines: {
            color: "rgba(255,255,255,0.1)",
            zeroLineColor:"rgba(255,255,255,1)"
            },
            ticks: {
            beginAtZero: true,
            fontColor: "#fff",
            suggestedMax: 1
            }
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false
} 

