import React from 'react';
import cn from 'classnames';

class SphereItem extends React.PureComponent {
    
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getCoord() {
        const top = this.getRandomInt(1, 99);
        let left = this.getRandomInt(1, 99);

        if( (top > 0 && top <= 5) || (top > 95)) {
            left = this.getRandomInt(45, 55);
        }
        if( (top > 5 && top <= 10) || (top > 90 && top <= 95)) {
            left = this.getRandomInt(30, 69);
        }
        if( (top > 10 && top <= 15) || (top > 85 && top <= 90)) {
            left = this.getRandomInt(21, 77);
        }
        if( (top > 15 && top <= 20) || (top > 80 && top <= 85)) {
            left = this.getRandomInt(15, 84);
        }
        if( (top > 20 && top <= 25) || (top > 75 && top <= 80)) {
            left = this.getRandomInt(10, 88);
        }
        if( (top > 25 && top <= 30) || (top > 70 && top <= 75)) {
            left = this.getRandomInt(7, 92);
        }
        if( (top > 30 && top <= 35) || (top > 65 && top <= 70)) {
            left = this.getRandomInt(4, 94);
        }
        if( (top > 35 && top <= 40) || (top > 60 && top <= 65)) {
            left = this.getRandomInt(3, 96);
        }
        if( (top > 40 && top <= 45) || (top > 55 && top <= 60)) {
            left = this.getRandomInt(1, 98);
        }

        return {
            left: `${left}%`,
            top: `${top}%`
        };
    }

    render() {
        const { filled, tooltip, title, link, animated } = this.props;
        const coord = this.getCoord();

        return (
            <>
                <div
                    className={cn({
                        'sphere__item': true,
                        filled
                    })}
                    style={coord}
                ></div>
                <div className={
                    cn({
                        "sphere__tooltip": true,
                        active: animated
                    })
                    } style={coord}
                >
                    {
                        tooltip &&
                        <a target="_blank" href={link} className="sphere__link">{ title }</a>
                    }
                </div>
            </>
        );
    }
}

export default SphereItem;