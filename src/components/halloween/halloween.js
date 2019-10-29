import React from 'react';
import moment from 'moment';
import TimeAgo from 'react-timeago';




class Halloween extends React.Component {
	state = {
        deadline: 'October, 31, 2019'
	}
	
	componentWillMount() {
        this.getTimeUntil(this.state.deadline);
    }
    
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
    }

    loading0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());

        if (time < 0) {
            this.setState({days: 0, hours: 0, minutes: 0, seconds: 0})
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            this.setState({days, hours, minutes, seconds});

        }
    }

	render() {
		
		return (
			<div>
                <div>Days until HALLOWEEN</div>
				<div className="clock-days">{this.loading0(this.state.days)} Days</div>
                <div className="clock-hours">{this.loading0(this.state.hours)} Hours</div>
                <div className="clock-minutes">{this.loading0(this.state.minutes)} Hours</div>
                <div className="clock-seconds">{this.loading0(this.state.seconds)} Hours</div>
			</div>
		);
	}
}


export default Halloween;