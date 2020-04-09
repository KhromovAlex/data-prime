import React from 'react';
import cn from 'classnames';

class SphereItem extends React.PureComponent {
    
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getCoord() {
        const y = this.getRandomInt(0, 500);
        let x = this.getRandomInt(0, 500);
        let z = this.getRandomInt(-250, 250);
        let operator = String(z)[0] === '-' ? '-' : String(z)[0] === '0' ? 0 : '+';

        if( (y >= 0 && y <= 25) || (y > 475)) {
            x = this.getRandomInt(225, 275);
        }
        if( (y > 25 && y <= 50) || (y > 450 && y <= 475)) {
            x = this.getRandomInt(150, 345);
        }
        if( (y > 50 && y <= 75) || (y > 425 && y <= 450)) {
            x = this.getRandomInt(105, 385);
        }
        if( (y > 75 && y <= 100) || (y > 400 && y <= 425)) {
            x = this.getRandomInt(75, 420);
        }
        if( (y > 100 && y <= 125) || (y > 375 && y <= 400)) {
            x = this.getRandomInt(50, 440);
        }
        if( (y > 125 && y <= 150) || (y > 350 && y <= 375)) {
            x = this.getRandomInt(35, 460);
        }
        if( (y > 150 && y <= 175) || (y > 325 && y <= 350)) {
            x = this.getRandomInt(20, 470);
        }
        if( (y > 175 && y <= 200) || (y > 300 && y <= 325)) {
            x = this.getRandomInt(15, 480);
        }
        if( (y > 200 && y <= 225) || (y > 275 && y <= 300)) {
            x = this.getRandomInt(5, 490);
        }
        if( (y > 225 && y <= 250) || (y > 250 && y <= 275)) {
            x = this.getRandomInt(0, 500);
        }


        let shift = Math.sqrt((x > 250 ? x - 250 : 250 - x)**2 + (y > 250 ? y - 250 : 250 - y)**2);
        
        return {
            transform: `translate3d(${x}px, ${y}px, ${operator === 0 ? 0 : +(operator + (Math.sqrt((250)**2 - (shift)**2) === 0 ? 0 : (Math.sqrt((250)**2 - (shift)**2)) ))}px)`
        };

    }

    render() {
        const { filled, tooltip, title, link, animated } = this.props;
        const coord = this.getCoord();

        return (
            <>
                <div className="sphere__wrapper" style={coord}>
                    <div
                        className={cn({
                            'sphere__item': true,
                            filled,
                            active: animated
                        })}
                        
                    ></div>
                </div>
                <div className="sphere__wrapper" style={coord}>
                    <div className={
                        cn({
                            "sphere__tooltip": true,
                            active: animated
                        })
                        }
                    >
                        {
                            tooltip &&
                            <a target="_blank" href={link} className="sphere__link">{ title }</a>
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default SphereItem;