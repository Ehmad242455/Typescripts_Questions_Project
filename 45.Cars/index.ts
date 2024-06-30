function carInfo(manufaturer:string, modelName:string, ...extraOption: { [key:string] : any } [] ) : object {
    const carinfo = {
        manufaturer,
        modelName,
        ...Object.assign({}, ...extraOption )
    }
    return carinfo
};

let ans = carInfo("Honda","Civic",{color:"Black"},{feature:["Navigation","Power Window"]});

console.log(ans);
