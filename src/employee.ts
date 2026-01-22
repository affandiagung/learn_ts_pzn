export interface Employee {
    id : number;
    name : string;  
    divsion : string;
}

export interface Manager extends Employee {
    numberOfSubordinates : number;
}