import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className='row'>
                <div className='col s12'>
                    <div className='input-field '>
                        <input
                            id='email_inline'
                            type='search'
                            className='validate'
                            placeholder='search'
                            value={this.state.search}
                            onKeyDown={this.handleKey}
                            onChange={(event) =>
                                this.setState({ search: event.target.value })
                            }
                        />
                        <button
                            className='btn blue accent-3 search-btn'
                            onClick={() =>
                                this.props.searchMovies(
                                    this.state.search,
                                    this.state.type
                                )
                            }
                        >
                            Search
                        </button>
                    </div>
                    <div>
                        <label>
                            <input
                                name='type'
                                type='radio'
                                checked={this.state.type === 'all'}
                                data-type='all'
                                onChange={this.handleFilter}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                name='type'
                                type='radio'
                                checked={this.state.type === 'movie'}
                                data-type='movie'
                                onChange={this.handleFilter}
                            />
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input
                                name='type'
                                type='radio'
                                checked={this.state.type === 'series'}
                                data-type='series'
                                onChange={this.handleFilter}
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
