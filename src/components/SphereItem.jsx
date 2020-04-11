import React from 'react';
import cn from 'classnames';

class SphereItem extends React.PureComponent {
    
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getCoord() {
        const { sizePoint, radius } = this.props;
        const y = this.getRandomInt(0, radius * 2);
        const yShift2D = Math.abs(y - radius);
        const maxShiftX = Math.sqrt(radius ** 2 - yShift2D ** 2);
        const x = this.getRandomInt(radius - maxShiftX, radius + maxShiftX);
        const operator = String(this.getRandomInt(-10, 10))[0] === '-' ? '-' : '+';
        let shiftZ = Math.sqrt((x > radius ? x - radius : radius - x)**2 + (y > radius ? y - radius : radius - y)**2);
        const z = +(operator +  (Math.sqrt((radius)**2 - (shiftZ)**2)) );
        
        return {
            transform: `translate3d(${x}px, ${y}px, ${(z)}px)`,
            width: `${sizePoint}px`,
            height: `${sizePoint}px`
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