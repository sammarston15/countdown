import React from 'react';
import moment from 'moment';

class Halloween extends React.Component {
    state = {
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            // const { timeTillDate, timeFormat } = this.props;
            const then = moment("October 31, 2019 00:00:00 -0700", "LLL, h:mm ZZ");
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('H');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        return (
            <div>
                <h1>Countdown</h1>
                <div className="countdown-wrapper">
                    <div className="countdown-item">
                        {days}
                        <span>days</span>
                    </div>
                    <div className="countdown-item">
                        {hours}
                        <span>hours</span>
                    </div>
                    <div className="countdown-item">
                        {minutes}
                        <span>minutes</span>
                    </div>
                    <div className="countdown-item">
                        {seconds}
                        <span>seconds</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Halloween;