import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import getPeople from '../../api/people';

import './peopleTable.scss';
import PersonRow from '../PersonRow/PersonRow';
import Header from '../Header/Header';

class PeopleTable extends Component {
  state = {
    table: [],
  }

  async componentDidMount() {
    this.setState({
      table: await getPeople(),
    });
  }

  render() {
    const { table } = this.state;

    return (
      <>
        <Header />

        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>sex</th>
              <th>born</th>
              <th>died</th>
              <th>mother</th>
              <th>father</th>
            </tr>
          </thead>
          <tbody>
            { table.map(person => (
              <tr key={nanoid()}>
                <PersonRow person={person} />
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default PeopleTable;
