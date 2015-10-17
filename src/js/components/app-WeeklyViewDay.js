/*global require, module, openExternalUrl, minimizeWindow*/
/** @jsx React.DOM */
var React = require('react'),
randomMC = require('random-material-color');

var WeeklyViewDay = React.createClass({
    _openExternalUrl: function (event) {
        "use strict";
        openExternalUrl(this.props.timeEntryUrl);
        minimizeWindow();
        event.nativeEvent.stopImmediatePropagation();
    },
    render: function () {
        "use strict";

        var iconStyle = {
            backgroundColor: randomMC.getColor({ text: this.props.taskName })
        };

        return (
 <div className="tile tile-collapse">
    <div className="tile-toggle">
        <div className="pull-left tile-side">
            <div className="avatar avatar-sm avatar-multi" title={this.props.taskName} style={iconStyle}>
                <span title={this.props.projectName} >{this.props.iconText}</span>
            </div>
        </div>
        <div className="tile-action tile-action-show">
            <ul className="nav nav-list pull-right">
                <li title={"Open time entry in Redmine"}>
                    <a onClick={this._openExternalUrl} href="#"><span className="icon icon-launch task-icon"></span></a>
                </li>
            </ul>
        </div>
        <div className="tile-inner" title={this.props.taskName}>
            <div className="text-overflow">
            {this.props.taskName}
            <span className="nav nav-list pull-right">
                {this.props.hours}h
            </span>
            </div>
        </div>
    </div>
</div>
);
    }
});

module.exports = WeeklyViewDay;