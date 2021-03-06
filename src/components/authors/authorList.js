"use strict";

var React = require('react');

var AuthorList = React.createClass({
	render: function(){
		var createAuthorRow = function(author){
			return (
				<tr key={author.id}>
					<td><a href={"/authors" + author.id}>{author.id}</a></td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			)
		}
		return (
			<table className="table">
				<thead>
				</thead>
				<tbody>
					{this.props.authors.map(createAuthorRow, this)}
				</tbody>
			</table>
		);
	}
});

module.exports = AuthorList;