var fs = require('fs');
var json2csv = require('json2csv');

var json = [
  { 'Lead ID': '00Q21000001KwO6',
    'Lead Owner': 'Jason Wolf',
    'First Name': '',
    'Last Name': '[not provided]',
    Title: '',
    'Company / Account': 'Azalea Trace Inc',
    'Lead Source': 'Hoovers Leads',
    Rating: '',
    Street: '',
    'Primary Email': '' },
  { 'Lead ID': '00Q21000001KwO7',
    'Lead Owner': 'Jason Wolf',
    'First Name': '',
    'Last Name': '[not provided]',
    Title: '',
    'Company / Account': 'East Norriton Physician Services',
    'Lead Source': 'Hoovers Leads',
    Rating: '',
    Street: '',
    'Primary Email': '' },
  { 'Lead ID': '00Q21000001KwO8',
    'Lead Owner': 'Jason Wolf',
    'First Name': '',
    'Last Name': '[not provided]',
    Title: '',
    'Company / Account': 'Infinity Dental Management, LLC',
    'Lead Source': 'Hoovers Leads',
    Rating: '',
    Street: '',
    'Primary Email': '' }
];

json2csv({data: json, fields: ['Lead ID', 'Lead Owner', 'First Name', 'Last Name','Title','Company / Account','Lead Source','Rating','Street','Primary Email']}, function(err, csv) {
  if (err) console.log(err);
  fs.writeFile('leads.csv', csv, function(err) {
    if (err) throw err;
    console.log('file saved');
  });
});
