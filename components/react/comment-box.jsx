var React       = require('react');
var fractal     = require('@frctl/fractal');
var CommentList = require(fractal.components.find('@comment-list').viewPath);
 
module.exports = React.createClass({
    displayName: 'CommentBox',
    render: function () {
        return (
            <div className="CommentBox">
                <h1>Comments</h1>
                <CommentList comments={this.props.comments} />
            </div>
        );
    }
});
