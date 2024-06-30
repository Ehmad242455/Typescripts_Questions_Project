function carInfo(manufaturer, modelName, ...extraOption) {
    const carinfo = {
        manufaturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carinfo;
}
;
let ans = carInfo("Honda", "Civic", { color: "Black" }, { feature: ["Navigation", "Power Window"] });
console.log(ans);
export {};
