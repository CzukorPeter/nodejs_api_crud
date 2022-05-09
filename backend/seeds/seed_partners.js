// fake data generated with https://www.random-name-generator.com/hungary

exports.seed = function(knex) {
    return knex('partners').truncate()
      .then(function () {
        return knex('partners').insert([
          {id: 1, name: 'Gábor Balog',companyform_id: 1, tax_number: '4118-147111', company_reg_number: '4716 2576 3188 4', settlement_id: 1, address: 'Pataki körtér 91. 67. emelet', phone_number: '06(76)040-518', bank_account_number: 'HU79611344950670485178037144', comment: 'henriett22@balazs.com'},
          {id: 2, name: 'Budai Adél', companyform_id: 2, tax_number: '157142-180243', company_reg_number: '2221 8811 0548 1479', settlement_id: 5, address: 'Zétény útja 53.', phone_number: '06(35)528-735', bank_account_number: 'HU39049441729855009955583898', comment: 'kocsis.sara@freemail.com'},
          {id: 3, name: 'Lukács Noel', companyform_id: 2, tax_number: '234246-151204', company_reg_number: '6011 6873 8012 7454', settlement_id: 2, address: 'Mária pincesor 7. 18. ajtó', phone_number: '+36603574653', bank_account_number: 'HU39679827896305625012597594', comment: 'vilmos.toth@gmail.com'},
          {id: 4, name: 'Németh Sándor', companyform_id: 3, tax_number: '232212-5155', company_reg_number: '6011 8552 1999 6494', settlement_id: 6, address: 'Kossuth u. 11', phone_number: '+36410133871', bank_account_number: 'HU42601132849743207683940771', comment: 'peter96@torok.com'},
          {id: 5, name: 'Juhász Dorottya', companyform_id: 1, tax_number: '167207-14597', company_reg_number: '2608 6067 4001 6841', settlement_id: 5, address: 'Papp sétány 74.', phone_number: '+36(50)423-184', bank_account_number: 'HU55359788701464407375848721', comment: 'orban.szabolcs@hotmail.com'},
          {id: 6, name: 'Hajdu Katinka', companyform_id: 3, tax_number: '53142-4148', company_reg_number: '5400 1641 2582 0943', settlement_id: 2, address: 'Budai ut 9.', phone_number: '+36422907428', bank_account_number: 'HU12888779480004317799720222', comment: 'aniko.bogdan@orsos.com'},
          {id: 7, name: 'Gulyás Mária', companyform_id: 4, tax_number: '217139-70251', company_reg_number: '4234 5006 8185 3213', settlement_id: 3, address: 'Barta utca 32.', phone_number: '06(43)905-065', bank_account_number: 'HU56227110436819506659305569', comment: 'johanna.kozma@kocsis.com'},
          {id: 8, name: 'Pataki Barbara', companyform_id: 1, tax_number: '2245-118353', company_reg_number: '3702 1595 0054 755', settlement_id: 1, address: 'Pap fasor 06', phone_number: '06(90)130-499', bank_account_number: 'HU55400381448571790588939567', comment: 'nemes.albert@hajdu.org'},
          {id: 9, name: 'Illés Boglárka', companyform_id: 5, tax_number: '168151-192118', company_reg_number: '3477 6343 1030 340', settlement_id: 6, address: 'Halász körút 128.', phone_number: '+36327150936', bank_account_number: 'HU83986313963888287765471718', comment: 'mihaly.molnar@hotmail.com'},
          {id: 10, name: 'Ferenczy Kincső', companyform_id: 5, tax_number: '215107-203242', company_reg_number: '5194 9212 8633 4943', settlement_id: 3, address: 'Kevin útja 309. 45. ajtó', phone_number: '+36286150816', bank_account_number: 'HU81948001930824305068856674', comment: 'gabor85@gmail.com'},
          {id: 11, name: 'Szabó Izabella', companyform_id: 4, tax_number: '148106-2245', company_reg_number: '4539 7413 7959 1', settlement_id: 2, address: 'Mihály dűlőút 10.', phone_number: '+36(47)595-078', bank_account_number: 'HU06458063136796713585741489', comment: 'balog.rudolf@balogh.net'},
          {id: 12, name: 'Váradi Gábor', companyform_id: 6, tax_number: '63121-16533', company_reg_number: '4485 6360 8995 2540', settlement_id: 4, address: 'Boros pincesor 27.', phone_number: '+36186410269', bank_account_number: 'HU09863578118087928889259866', comment: 'katinka47@vincze.com'},
          {id: 13, name: 'Horváth Mária', companyform_id: 6, tax_number: '7391-177217', company_reg_number: '5175 5054 2264 2799', settlement_id: 6, address: 'Soma határsor 4. 16. ajtó', phone_number: '06(24)154-908', bank_account_number: 'HU49996021306826486956201651', comment: 'laszlo.takacs@simon.net'},
        ]);
      });
  };



