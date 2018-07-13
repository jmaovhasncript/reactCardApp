import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class PaginationCom extends React.Component {
  render() {
    return (
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
       
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}