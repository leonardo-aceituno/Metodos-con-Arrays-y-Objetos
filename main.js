
document.write('<div class="text-center my-3 fs-1 fw-bold">ESTADISTICAS CENTRO MÉDICO ÑUÑOA</div>') 

let radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ',         paciente: 'FRANCISCA ROJAS',    rut: '9878782-1',   prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX',  paciente: 'PAMELA ESTRADA',     rut: '15345241-3',  prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ',        paciente: 'ARMANDO LUNA',       rut: '16445345-9',  prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY',        paciente: 'MANUEL GODOY',       rut: '17666419-0',  prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO',         paciente: 'RAMON ULLOA',        rut: '14989389-K',  prevision: 'FONASA'},
];

let traumatologia = [
    {hora: '08:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5',  prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9',  prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9',  prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6',   prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K',  prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8',   prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5',  prevision: 'ISAPRE'},
];

let dental = [
    {hora: '08:30', especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];


let insertar = array => {
    traumatologia.push(
        {hora: '08:30',  especialista: 'ANDREA ZUÑIGA',         paciente: 'MARCELA RETAMAL',    rut: '11123425-6',  prevision: 'ISAPRE'},
        {hora: '11:00',  especialista: 'MARIA PIA ZAÑARTU',     paciente: 'ANGEL MUÑOZ',        rut: '9878789-2',   prevision: 'ISAPRE'},
        {hora: '09:00',  especialista: 'RENÉ POBLETE',          paciente:  'ANA GELLONA',       rut: '13123329-7',  prevision: 'ISAPRE'},
        {hora: '09:30',  especialista: 'MARIA SOLAR',           paciente:  'RAMIRO ANDRADE',    rut: '12221451-K',  prevision: 'FONASA'},
        {hora: '10:00',  especialista: 'RAUL LOYOLA',           paciente:  'CARMEN ISLA',       rut: '10112348-3',  prevision: 'ISAPRE'},
        {hora: '10:30',  especialista: 'ANTONIO LARENAS',       paciente:  'PABLO LOAYZA',      rut: '13453234-1',  prevision: 'ISAPRE'},
        {hora: '12:00',  especialista: 'MATIAS ARAVENA',        paciente:  'SUSANA POBLETE',    rut: '14345656-6',  prevision: 'FONASA'},
        )
    return traumatologia    
}

let eliminarPrimeroUltimo = array => {
    array.pop();
    array.shift();
    return array;
}

let printTabla = (array,depto) => {
    let j = 1
    let plantilla = `<section class='container mt-5' id='${depto}'>
                    <div id='area-01' class='fs-4  text-center bg-info py-2 my-2 text-light fw-bold'>${depto}</div>
                  
                    <table class="table table-hover table-bordered border-info table-sm table-striped">
                    <thead class="">
                        <tr class='text-center'>
                            <th scope="col" >#</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Especialista</th>
                            <th scope="col">Paciente</th>
                            <th scope="col">Rut</th>
                            <th scope="col">Prevision</th>
                        </tr>
                    </thead>
                    <tbody>
                    `    
    
    for(let i in array) {
        plantilla += `
            <tr class='text-center'>
                <th scope="row"> ${j}</th>
                <td> ${array[i].hora} </td>
                <td> ${array[i].especialista}</td>
                <td> ${array[i].paciente}</td>
                <td> ${array[i].rut}</td>
                <td> ${array[i].prevision}</td>
            </tr>`
        j++
    }
    plantilla += `</tbody></table></section>`
    document.write(plantilla)
}


let arrayTxt = (array,depto) => {
    let texto = `
        <div class="container my-5">
        <div id='area-01' class='fs-4  text-center bg-info py-2 my-2 text-light fw-bold'>${depto}</div>
        <ol class="list-group list-group-numbered">`
    for(let i in array) {
        texto +=  `<li class="list-group-item">${dental[i].hora} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].rut} - ${dental[i].prevision} <br></li>`
    }
    texto += `</ol></div>`

    document.write(texto)
}


let impremePacientes = (array,titulo) => {
    let texto = `
        <div class="container my-5">
        <div id='area-01' class='fs-4  text-center bg-info py-2 my-2 text-light fw-bold'>${titulo}</div>
        <ol class="list-group list-group-numbered">`
    for(let i in array) {
        texto +=  `<li class="list-group-item">${array[i]} <br></li>`
    }
    texto += `</ol></div>`

    document.write(texto)
}

let todos = (array1, array2, array3,texto) => {
    let todos = array1.concat(array2.concat(array3))
    let pacientes = []
    todos.forEach( item => {
        // document.write(`${item.paciente} <br>`)
        pacientes.push(`${item.paciente}`)
        
    });
    impremePacientes(pacientes,texto)
  
    
}


let pacientesIsapre = (array,texto) => {
    let isapre = []
    for(let i in array) {
        if(array[i].prevision == "ISAPRE"){
            isapre.push(`${array[i].paciente} - ISAPRE`)
        }
    }
    impremePacientes(isapre,texto)
}


let pacientesFonasa = (array,texto) => {
    let fonasa = []
    for(let i in array) {
        if(array[i].prevision == "FONASA"){
            fonasa.push(`${array[i].paciente} - FONASA`)
        }
    }
    impremePacientes(fonasa,texto)
}


// MAIN
insertar(traumatologia)
eliminarPrimeroUltimo(radiologia)
printTabla(traumatologia,"Traumatologia ++")
printTabla(radiologia,"Radiologia --")
arrayTxt(dental,'Dental txt')
todos(traumatologia,radiologia,dental,"Total Pacientes")
pacientesIsapre(dental,"Dental Isapre")
pacientesFonasa(traumatologia,"Traumatologia Fonasa")








// ##################################








// document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
// document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
// document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);








