import React from 'react';
import './Commands.css'
import '../Pagination.css'
import CommandList from '../components/CommandList';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

class Commands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSelected: 1, 
      pageCount: 0,
      data: []
    }

    this.handlePageClick = this.handlePageClick.bind(this);
    this.fetchCommands = this.fetchCommands.bind(this);
  }

  handlePageClick(data) {
    this.setState({pageSelected: data.selected + 1}, this.fetchCommands);
  }

  fetchCommands() {
    axios.get(`${process.env.REACT_APP_HOST_API}/commands`, {
      params: {per_page: this.props.perPage, page: this.state.pageSelected}
    }).then(response => {
      this.setState(prevState => {
        let total_count = response.data.total_count;
        prevState.data = response.data.commands;
        prevState.pageCount = Math.floor(total_count / this.props.perPage) + 
          (total_count % this.props.perPage > 0 ? 1 : 0)

        return prevState;
      })
    })
  }

  componentDidMount() {
    this.fetchCommands();
  }
  
  render() {
    return(
      <div className="Commands">
        <h1 className="Title-name">Commands</h1>
        <CommandList data={this.state.data}/>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

export default Commands;