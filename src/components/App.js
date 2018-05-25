import React, { Component, Fragment } from 'react';
import Header from './Header';
import ProjectsGrid from './ProjectsGrid';
import withRoot from '../withRoot';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/alf1o/repos', {
      headers: new Headers({
        'accept': 'application/vnd.github.v3+json',
        'content-type': 'application/json'
      }),
      method: 'GET',
      redirect: 'follow'
    })
    .then(r => r.json())
    /*
      [] of {}
      id, name, created_at, html_url
    */
    .then(repos => repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      date: repo.created_at.slice(0, repo.created_at.indexOf('T')),
      url: repo.html_url
    })))
    .then(repos => this.setState({ repos }));
  }

  render() {
    const { repos } = this.state;
    return (
      <Fragment>
        <Header />
        <ProjectsGrid
          repos={repos}
        />
      </Fragment>
    );
  }
}

export { App };
export default withRoot(App);
