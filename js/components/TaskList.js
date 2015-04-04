var TaskList = React.createClass({

    render: function() {
        var displayTask = (task, event) => <li><a onClick={this.props.deleteClickHandler.bind(this, event)} href="#">{task}</a></li>;

        return (
            <ul>
                { this.props.items.map(displayTask) }
            </ul>
        );
    }

});