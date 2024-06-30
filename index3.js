function calculateNetSalary(basicSalary, benefits, taxRate, nhifRate, nssfRate) {  
    let grossSalary = basicSalary + benefits;  
    let payeeTax = grossSalary * taxRate;  
    let nhifDeductions = grossSalary * nhifRate;  
    let nssfDeductions = grossSalary * nssfRate;  
    let netSalary = grossSalary - payeeTax - nhifDeductions - nssfDeductions;  
      
    return {  
      grossSalary: grossSalary,  
      payeeTax: payeeTax,  
      nhifDeductions: nhifDeductions,  
      nssfDeductions: nssfDeductions,  
      netSalary: netSalary  
    };  
  }  
    
  // Example usage:  
  let basicSalary = 40000;  
  let benefits = 10000;  
  let taxRate = 0.25;  
  let nhifRate = 0.015;  
  let nssfRate = 0.05;  
    
  let result = calculateNetSalary(basicSalary, benefits, taxRate, nhifRate, nssfRate);  
    
  console.log(`Gross Salary: ${result.grossSalary}`);  
  console.log(`Payee Tax: ${result.payeeTax}`);  
  console.log(`NHIF Deductions: ${result.nhifDeductions}`);  
  console.log(`NSSF Deductions: ${result.nssfDeductions}`);  
  console.log(`Net Salary: ${result.netSalary}`);  
  