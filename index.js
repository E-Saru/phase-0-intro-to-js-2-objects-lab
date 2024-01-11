// Write your solution in this file!
 const employee = {
  name: "Saru",
  streetAddress: "11 Broadway"
};
function updateEmployeeWithKeyAndValue(employee, key, value){
  return {...employee, [key]: value,};
}
const employees = updateEmployeeWithKeyAndValue(
  employee, "name", "Sam"
);
console.log(employees);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  return (employee[key] = value);
}
const employee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway")
console.log(employee2);

function deleteFromEmployeeByKey(employee,key){
  return(employee[key]);
}
const newEmployee = deleteFromEmployeeByKey(employee, "name");
delete deleteFromEmployeeByKey.name;
console.log(newEmployee);

function destructivelyDeleteFromEmployeeByKey(employee, key){
  return (employee[key]);
}
const newEmployee2 = destructivelyDeleteFromEmployeeByKey(employee, "name");
delete destructivelyDeleteFromEmployeeByKey.name;
console.log(newEmployee2);

