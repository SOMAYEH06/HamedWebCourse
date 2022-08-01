const object = {
    monthly: 6300,
    compensation: 300,
    inflationFactor: 200,
    children: 800,
    healthInsurance: -400,
    pensionInsurance: -590,
    unemploymentInsurance: -100,
    marriage: 76,
    };
    
    function grossSalary(obj) {
        let sum = 0;
        for(let property in obj){
            sum += object[property]
        }
        return sum
    }
    
    const result = grossSalary(object)
    console.log('Result is:',result); // Output in console: 6586 Euros