// var userInpStr = 0;
// while(true) {
//     userInpStr = prompt("Who's the first actor/actress you can think of?");
//     if (typeof userInpStr === 'string' && userInpStr !== '' && isNaN(userInpStr) === true) {
//         alert(userInpStr + " has " + userInpStr.length + " characters in the string.");
//         break;
//     } else {
//         alert('You must enter something!');
//     }
// }
// var userMadLib = [];
// for(var i = 0; i <= 4; ++i) {
//     if (i === 0) {
//         userMadLib.push(prompt("Enter a noun"));
//     } else if (i === 1) {
//         userMadLib.push(prompt("Enter a verb"));
//     } else if (i === 2) {
//         userMadLib.push(prompt("Enter a adjective"));
//     } else if (i === 3) {
//         userMadLib.push(prompt("Enter a adverb"));
//     } else if (i === 4) {
//         alert(`Do you ${userMadLib[1]} your ${userMadLib[2]} ${userMadLib[0]} ${userMadLib[3]}? That's hilarious!`);
//     }
// }


var salesReport = {
    title: 'Monthly Sales Report',
    date: '03-17-2015',
    office: 'Codeup',
    employees: [
        {
            employeeNumber: '1',
            name: {
                first: 'Jane',
                last: 'Janeway'
            },
            salesUnits: 3
        },
        {
            employeeNumber: '2',
            name: {
                first: 'Tricia',
                last: 'Triciason'
            },
            salesUnits: 5
        },
        {
            employeeNumber: '3',
            name: {
                first: 'Jeannette',
                last: 'Jeanson'
            },
            salesUnits: 4
        },
        {
            employeeNumber: '4',
            name: {
                first: 'Charles Emmerson III',
                last: 'Winchester'
            },
            salesUnits: 2
        },
        {
            employeeNumber: '5',
            name: {
                first: 'Chet',
                last: 'Chedderson'
            },
            salesUnits: 8
        },
    ],
    getEmployeeCount: function() {
       return salesReport.employees.length;
    },
    getTotalNumberOfSales: function() {
        var totalSales = 0;
        salesReport.employees.forEach(function(element) {
            totalSales += element.salesUnits;
        });
        return totalSales;
    },
    getAverageSalesPerEmployee: function () {
       var averageSalesPerEmployee = salesReport.getTotalNumberOfSales() / salesReport.getEmployeeCount();
       return averageSalesPerEmployee;
    }
};
