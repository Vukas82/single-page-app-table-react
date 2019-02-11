import React, {Component} from 'react';
import TagModal from './TagModal';
import './Table.css';

import $ from 'jquery'
$.DataTable = require( 'datatables.net-bs4' );




class Table extends Component {
    state = {visible : true}

    componentDidMount = () => {
        
        this.$el = $(this.el)
            this.$el.DataTable( {

                "dom": 'rt<"bottom"flp><"clear">',
                
              data: this.props.data,
              columns:[
                  { title: 'Tag ID'},
                  { title: 'Tag Name'},
                  { title: 'Tag Type'},
                  { title: 'My Feed.'},
                  { title: 'My Favourites'},
                  { title: 'Action'}
              ],
          }
        );
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