import React, {Component} from 'react';
import TagModal from './Modal';
import './Table.css';

import { Button, Alert } from 'reactstrap';

// // require( 'jquery' );
// require( 'datatables.net-dt' );
// // require( 'datatables.net-editor-dt' )();
// require( 'datatables.net-buttons-dt' );
// require( 'datatables.net-fixedcolumns-dt' );
// require( 'datatables.net-fixedheader-dt' );
// require( 'datatables.net-responsive-dt' );
// // require( 'datatables.net-select-dt' );



const $ = require('jquery')
$.DataTable = require( 'datatables.net-bs4' );




class Table extends Component {
    state = {visible : true}
    componentDidMount = () => {
        
      console.log(this.el)
      this.$el = $(this.el)
      this.$el.DataTable(
          {
              data: this.props.data,
              columns:[
                  { title: 'Tag ID'},
                  { title: 'Tag Name'},
                  { title: 'Tag Type'},
                  { title: 'My Feed.'},
                  { title: 'My Favourites'},
                  { title: 'Action'}
              ]
          }
      )
    }
    toggle(){this.setState({visible: !this.state.visible})}
    componentWillUnmount() {
        this.$el.DataTable.destroy(true);
    }
    render() {
        return(
            <div>
                <TagModal></TagModal>
                <table id="myTable" className="table table-striped table-bordered table-hover table-sm" width="100%" ref = { el => this.el = el }></table>
            </div>    
            
        )
    }
}

export default Table;