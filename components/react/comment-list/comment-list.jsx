var React = require('react');
var fractal = require('@frctl/fractal');
var Comment = require(fractal.components.find('@comment').viewPath);

module.exports = React.createClass({
    displayName: 'CommentList',
    render: function() {
        var commentNodes = this.props.comments.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="CommentList">
                {commentNodes}
            </div>
        );
    }
});
