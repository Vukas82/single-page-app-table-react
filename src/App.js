import React, { Component } from 'react';
import './App.css';
import Table from './Table';

class App extends Component {

  
  render() {
    return (
      <div className="App">
      <Table data={this.dataSet}></Table>
      </div>
    );
  }
  
dataSet = [
  ['1','Airi Satou','Accountant',	'Tokyo',	'33', '2008/11/28'],
  ['2','Angelica Ramos',	'Chief Executive Officer (CEO)',	'London	',	'47',	'2009/10/09'],
  ['3','Ashton', 'Cox	Junior Technical Author',	'San Francisco',	'66',	'2009/01/12'],
  ['4','Bradley Greer',	'Software Enginee	','London',	'41',	'2012/10/13'],
  ['5','Brenden Wagner',	'Software Engineer',	'San Francisco',	'28',	'2011/06/07'],
  ['6','Brielle Williamson',	'Integration Specialist',	'New York',	'61',	'2012/12/02'],
  ['7','Bruno Nash',	'Software Engineer',	'London',	'38',	'2011/05/03'],
  ['8','Caesar Vance',	'Pre-Sales Support',	'New York',	'21',	'2011/12/12'],
  ['9','Cara Stevens',	'Sales Assistant'	,'New York',	'46'	,'2011/12/06'],
  ['10','Cedric Kelly',	'Senior Javascript Developer'	,'Edinburgh'	,'22',	'2012/03/29'],
  ['Charde Marshall',	'Regional Director'	,'San Francisco'	,'36',	'2008/10/16',	'$470,600'],
  ['Colleen Hurst',	'Javascript Developer',	'San Francisco',	'39',	'2009/09/15',	'$205,500'],
  ['Dai Rios',	'Personnel Lead',	'Edinburgh'	,'35',	'2012/09/26',	'$217,500'],
  ['Donna Snider',	'Customer Support',	'New York',	'27',	'2011/01/25',	'$112,000'],
  ['Doris Wilder',	'Sales Assistant',	'Sidney'	,'23',	'2010/09/20',	'$85,600'],
  ['Finn Camacho',	'Support Engineer',	'San Francisco',	'47',	'2009/07/07'	,'$87,500'],
  ['Fiona Green',	'Chief Operating'	,'San Francisco'	,'48',	'2010/03/11',	'$850,000'],
  ['Garrett Winters',	'Accountant'	,'Tokyo'	,'63',	'2011/07/25',	'$170,750']
  ]
}

export default App;



      // <div className="App">
        {/* <header className="App-header"> */}
        // <div><Table data={this.dataSet}></Table></div>
        {/* </header> */}

      {/* </div> */}