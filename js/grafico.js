var storage = firebase.storage();  
var storageReff = storage.ref();
var button ="";
var cont = 0;
var jan = 0;
var fev = 0;
var mar = 0;
var abr = 0;
var mai = 0;
var jun = 0;
var jul = 0;
var ago = 0;
var set = 0;
var out = 0;
var nov = 0;
var dez = 0;
function grafico(jan, fev, mar, abr, mai, jun,jul,ago,set,out,nov,dez){
    var ctx = document.getElementById('chart_0').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fer', 'Mar','Abr', 'Mai', 'Jun', 'Jul','Ago', 'Set', 'Out','Nov', 'Dez'],
            datasets: [{
                label: 'Taxa de Requisições',
                data: [jan, fev, mar, abr, mai, jun,jul,ago,set,out,nov,dez],
                backgroundColor: [
                    'rgba(77,77,255,0.4)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
            display:true,
            text:"RELATÓRIO DE REQUISIÇÕES 2019",
            fontSize:20
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
