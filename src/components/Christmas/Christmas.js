import React from 'react';
import './Christmas.css';

class Christmas extends React.Component {
	state = {
        deadline: 'Decmember, 25, 2019', 
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
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
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const seconds = Math.floor((time / 1000) % 60);
            this.setState({days, hours, minutes, seconds});

        }
    }

	render() {
		
		return (
			<div className='thanksgiving'>
                {/* <iframe src="https://giphy.com/embed/9PgseUGIG7YfmNcuU3" width="1000px" height="1000px" frameBorder="0" classname="giphy-embed" allowFullScreen style={{zIndex: '1'}}></iframe> */}
                <div className='title'>Days until CHRISTMAS 2019</div>
				<div className="clock-days">{this.loading0(this.state.days)} days</div>
                <div className="clock-hours">{this.loading0(this.state.hours)} hours</div>
                <div className="clock-minutes">{this.loading0(this.state.minutes)} minutes</div>
                <div className="clock-seconds">{this.loading0(this.state.seconds)} seconds</div>
			</div>
		);
	}
}


export default Christmas;