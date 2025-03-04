interface LabeledValue{
    label: string;
}
function printLabel(labledObj: LabeledValue){
    console.log(labledObj.label);
};
let myObj = {
    size: 10,
    label: 'size 10 object'
}
printLabel(myObj);