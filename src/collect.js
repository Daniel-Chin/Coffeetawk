import React, { Component } from 'react';
import chainedClasses from './class_chaining';

class CollectBody extends Component {
    STATE = {
        page: 'collecting', 
        time: new Date(), 
        bag: null, 
        n_drinks: null,
    };

    constructor (props) {
        super(props);
        this.state = Object.assign({}, this.STATE, {token: Math.random()});
    }

    renderCollecting () {
        return (
            <div>
                <TimeEntry value={this.state.time} update={this.update.bind(this)} />
                <BagEntry value={this.state.bag} update={this.update.bind(this)} />
                <DrinkEntry value={this.state.n_drinks} update={this.update.bind(this)} />
                <Foot 
                    submit={function () {
                        this.setState({page: 'reviewing'});
                        pretendSubmit(this.state);
                        window.scrollTo(0, 0);
                    }.bind(this)}
                    whatsMissing={function () {
                        return this.whatsMissing()
                    }.bind(this)} 
                />
            </div>
        );
    }

    renderReviewing () {
        return (
            <div className="text-center">
                <div className={chainedClasses.head}>
                    Success! 
                </div>
                <div className={chainedClasses.my_card}>
                    <div className="card-body">
                        <ReviewBox 
                            time={this.state.time} 
                            bag={this.state.bag} 
                            n_drinks={this.state.n_drinks} 
                        />
                        <div>Made a mistake? </div>
                        <button 
                            onClick={function () {
                                this.setState({page: 'collecting'});
                                window.scrollTo(0, 0);
                            }.bind(this)} className="btn btn-warning"
                        >Edit</button>
                    </div>
                </div>
                <div className={chainedClasses.my_card}>
                    <div className="card-body">
                        <button onClick={function () {
                            this.setState(this.STATE);
                            this.setState({token: Math.random()});
                            window.scrollTo(0, 0);
                        }.bind(this)} className="btn btn-primary btn-lg">
                            NEXT
                        </button>
                        <div className="font-125">
                            Keeping it up! 
                        </div>
                    </div>
                </div>
                <div className={chainedClasses.my_card}>
                    <div className="card-body">
                        <button onClick={function () {
                            alert("This is the end of this demo. Thank you. ");
                        }} className="btn btn-success">
                            Finish
                        </button>
                        <div>to call it a day. </div>
                    </div>
                </div>
            </div>
        );
    }

    render () {
        if (this.state.page === 'collecting') {
            return this.renderCollecting();
        }
        return this.renderReviewing();
    }

    update(key, value) {
        const item = {};
        item[key] = value;
        this.setState(item);
    }

    whatsMissing () {
        if (this.state.bag == null)
            return 'bag';
        if (this.state.n_drinks == null)
            return 'drink';
        return 'none';
    }
}

class TimeEntry extends Component {
    render () { 
        return (
            <div className={chainedClasses.my_card}>
                <div className="card-header">
                    Time
                </div>
                <div className="card-body">
                    <TimeDisplay time={this.props.value} />
                    <div className="btn-group right" role="group">
                        <button 
                            onClick={function () {
                                this.acc(-1);
                            }.bind(this)} 
                            type="button" className="btn btn-secondary"
                        >-</button>
                        <button 
                            onClick={function () {
                                this.acc(+1);
                            }.bind(this)} 
                            type="button" className="btn btn-secondary"
                        >+</button>
                    </div>
                </div>
            </div>
        );
    }

    acc (delta) {
        const newTime = new Date(this.props.value.getTime() + delta * 60 * 1000);
        this.props.update('time', newTime);
    }
}

const TimeDisplay = (props) => (
    <span className="align-bottom">
        {pad(props.time.getHours(), 2)}:{pad(props.time.getMinutes(), 2)}
    </span>
);
const pad = function padNumberWith0(n, width) {
    n = String(n);
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
};  

class BagEntry extends Component {
    render () { 
        return (
            <div className={chainedClasses.my_card}>
                <div className="card-header">
                    Bag
                </div>
                <div className="card-body">
                    <div className="btn-group-vertical right">
                        <BagButton caption='Big backpack' onClick={this.handleClick.bind(this)} value={this.props.value} />
                        <BagButton caption='Small backpack' onClick={this.handleClick.bind(this)} value={this.props.value} />
                        <BagButton caption='Big handbag' onClick={this.handleClick.bind(this)} value={this.props.value} />
                        <BagButton caption='Small handbag' onClick={this.handleClick.bind(this)} value={this.props.value} />
                        <BagButton caption='No bag' onClick={this.handleClick.bind(this)} value={this.props.value} />
                    </div>
                </div>
            </div>
        );
    }

    handleClick (caption) {
        this.props.update('bag', caption);
    }
}

const BagButton = (props) => {
    const style = props.caption === props.value ? 'primary' : 'secondary';
    const class_name = `btn btn-${style}`;
    return (
        <button 
            className={class_name} 
            onClick={function () {
                props.onClick(props.caption);
            }} 
        >
            {props.caption}
        </button>
    )
};

class DrinkEntry extends Component {
    render () {
        return (
            <div className={chainedClasses.my_card}>
                <div className="card-header">
                    Number of drinks
                </div>
                <div className="card-body">
                    <div className="btn-group right">
                        <NumButton n_drinks={0} onClick={this.handleClick.bind(this)} value={this.props.value} />
                        <NumButton n_drinks={1} onClick={this.handleClick.bind(this)} value={this.props.value} />
                        <NumButton n_drinks={2} onClick={this.handleClick.bind(this)} value={this.props.value} />
                        <NumButton n_drinks={3} onClick={this.handleClick.bind(this)} value={this.props.value} />
                        <NumButton n_drinks={4} onClick={this.handleClick.bind(this)} value={this.props.value} />
                    </div>
                </div>
            </div>
        );
    }

    handleClick (n_drinks) {
        this.props.update('n_drinks', n_drinks);
    }
}

const NumButton = (props) => {
    const style = props.n_drinks === props.value ? 'primary' : 'secondary';
    const class_name = `btn btn-${style}`;
    return (
        <button 
            className={class_name} 
            onClick={function () {
                props.onClick(props.n_drinks);
            }} 
        >
            {props.n_drinks}
        </button>
    )
};

const Foot = (props) => {
    let style;
    let caption;
    let action;
    const missing = props.whatsMissing();
    if (missing === 'none') {
        style = 'success';
        caption = 'Submit';
        action = props.submit;
    } else {
        style = 'light';
        caption = `Missing ${missing} info...`;
        action = () => (null);
    }
    const class_name = `btn btn-${style} btn-block`;
    return (
        <div className="margin-1">
            <button onClick={action} className={class_name}>
                {caption}
            </button>
        </div>
    );
};

const ReviewBox = (props) => {
    return (
        <div className="card child-mg-1">
            <TimeDisplay time={props.time} />
            <span>{props.bag}</span>
            <span>{props.n_drinks} drink{props.n_drinks===1 ? '' : 's'}</span>
        </div>
    );
};

const pretendSubmit = function (state) {
    let _, time, bag, n_drinks, token;
    ({_, time, bag, n_drinks, token} = state);
    ((x)=>(x))(_);  // To avoid unused var warning. 
    console.log(`Pretending to submit to server: 
        time: ${time}
        bag: ${bag}
        n_drink: ${n_drinks}
        session token: ${token}
    `);
};

const collect = {
    title: null,
    body: CollectBody,
};

export default collect;
