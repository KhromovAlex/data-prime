import React from 'react';
import cn from 'classnames';

import SphereItem from './SphereItem';

import './Sphere.css'
import data from '../data.json';

class Sphere extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          countPoint: 150,
          countTooltip: 5,
          animated: true
        };
    }

    componentDidMount() {
        this.setState({
          items: data.items
        })
    }

    handleCount = (e) => {
        let value = +e.target.value;
        const { items, countPoint, countTooltip } = this.state;
        if(value < 1) {
            value = 1;
        }
        if(e.target.name === 'countPoint' && value > items.length + 1) {
            value = items.length + 1
        }
        if(e.target.name === 'countTooltip' && value > countPoint) {
            value = countPoint
        }
        if(e.target.name === 'countPoint' && value <= countTooltip) {
            this.setState({
                countPoint: Math.round(value),
                countTooltip: Math.round(value),
                animated: true
            });
        } else {
            this.setState({
                [e.target.name]: Math.round(value),
                animated: true
            });
        }
    }

    handleOnFocus = () => {
        this.setState({
            animated: false
        })
    }

    handleOnBlur = () => {
        this.setState({
            animated:true
        })
    }

    renderList() {
        const { items, countPoint, countTooltip, animated } = this.state;
        
        return (
            items.map((item, i) => {
                return (
                    i < countPoint &&
                    <SphereItem
                        key={`${item.link}${item.filled}`}
                        title={item.title}
                        link={item.link}
                        filled={item.filled}
                        tooltip={i < countTooltip}
                        animated={animated}
                    />
                );
            })
        )
    }

    render() {
        const { countPoint, countTooltip, animated } = this.state;
        
        return (
            <div className="sphere">
                <div
                    className={
                        cn({
                            "sphere__list": true,
                            active: animated
                        })
                    }
                >
                    {
                        this.renderList()
                    }
                </div>
                <label className="sphere__label-point">
                    <span className="sphere__label-text">Count Point</span>
                    <input onBlur={this.handleOnBlur} onFocus={this.handleOnFocus} type="number" name="countPoint" value={countPoint} onChange={this.handleCount}/>
                </label>
                <label className="sphere__label-tooltip">
                    <span className="sphere__label-text">Count Tooltip</span>
                    <input onBlur={this.handleOnBlur} onFocus={this.handleOnFocus} type="number" name="countTooltip" value={countTooltip} onChange={this.handleCount}/>
                </label>
            </div>
        );
    }  
}

export default Sphere;