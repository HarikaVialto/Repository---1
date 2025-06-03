// Define the Employee interface
interface Employee {
    name: string;
    department: string;
    salary: number;
}

// Define the result type for the accumulator in the reduce function
interface DepartmentSalary {
    [department: string]: {
        name: string;
        salary: number;
    };
}

// Sample employee data
const employees: Employee[] = [
    { name: "Sunny", department: "Finance", salary: 90000 },
    { name: "Sai", department: "HR", salary: 60000 },
    { name: "Hari", department: "Sales", salary: 85000 }
];

// Function to find the highest salary in each department
function findHighestSalaryByDepartment(employees: Employee[]): DepartmentSalary {
    return employees.reduce<DepartmentSalary>((acc, { name, department, salary }) => {
        if (!acc[department] || salary > acc[department].salary) {
            acc[department] = { name, salary };
        }
        return acc;
    }, {});
}

// Execute the function and log the result
const highestSalaries = findHighestSalaryByDepartment(employees);
console.log(highestSalaries);
