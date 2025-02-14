const button = document.querySelector('button')

//creating Div for result
let result = document.createElement('div')
result.id = 'result'

document.getElementById('wrapper').appendChild(result)


//event listner

button.addEventListener('click', displayDetails)

function displayDetails(){

    const input = document.getElementById('input')

    const selectedCity = input.options[input.selectedIndex].value


    let population =0;
    let language ='';
    let literaryRate =0;

    switch (selectedCity){
        case 'Colombo':
            population =80;
            language ='English';
            literaryRate =95;
            break

        case 'Kandy':
            population =50;
            language ='Tamil';
            literaryRate =40;
            break
        
        case 'Ratnapura':
                population =60;
                language ='Sinhala';
                literaryRate =76;
                break

        case 'Galle':
                    population =56;
                    language ='Sinhala , Hindi';
                    literaryRate =59;
                    break

    }

    let text= `This is city ${selectedCity} which as popularity of ${population}% and they do speak ${language} language and their literary rate is ${literaryRate}%.`

    document.getElementById('result').innerHTML = text
    console.log(text)

    



}