const fullJobList = [
    'ER Nurse',
    'Clown'
];

const activeList = [

];

const render = function(array){
    $("#job-board").empty();
    for(let i = 0; i < array.length; i++){
        $("#job-board").append(`<div>${array[i]}</div>`);
        }
    }

const addJob = function(event){
    event.preventDefault();
    const input = $('#add-input').val();
    fullJobList.push(input);
    render(fullJobList);
}

const searchJob = function(event){
    event.preventDefault();
    const input = $("#search-input").val();
    for(let i = 0; i < fullJobList.length; i++){
        if(fullJobList[i].toLowerCase().includes(input.toLowerCase())){
            activeList.push(fullJobList[i]);
        }

    }
   render(activeList);
}

$("#search").on('click', searchJob);
$('#add').on('click', addJob);





