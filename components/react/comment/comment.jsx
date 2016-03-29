var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="Comment">
                <h2 className="Comment-author">
                    {this.props.author}
                </h2>
                <p className="Comment-text">{this.props.children}</p>

            </div>
        );
    }
});
