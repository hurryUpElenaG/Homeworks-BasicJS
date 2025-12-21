function getType(parameter) {
    let parameterType = typeof (parameter);
    console.log(parameterType);
    return parameterType;
}


getType({name:"Elena", surname:"Georgievska", counry: "North Macedonia"}); // object
getType(true);    // boolean
getType(30);      // number
getType("Elena Georgievska");      // string
getType();    // undefined