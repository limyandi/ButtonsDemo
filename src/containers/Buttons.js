import React, {Component} from 'react';
import Button from '../component/Button';

/**
 * Container class that renders all the demo buttons
 */
class Buttons extends Component {
    render() {
        return (
            <div>
                <h3>default</h3>
                <div>
                    <Button
                        disabled={false}
                        label='Button'
                    />
                    <Button
                        disabled={true}
                        label='Button'
                    />
                </div>
                <h3>primary</h3>
                <div>
                    <Button
                        disabled={false}
                        primary={true}
                        label='Button'
                    />
                    <Button
                        disabled={true}
                        primary={true}
                        label='Button'
                    />
                </div>

                <h3>secondary</h3>
                <div>
                    <Button
                        disabled={false}
                        secondary={true}
                        label='Button'
                    />
                    <Button
                        disabled={true}
                        secondary={true}
                        label='Button'
                    />
                </div>

                <h3>flat</h3>
                <div>
                    <Button
                        disabled={false}
                        flat={true}
                        label='Button'
                    />
                    <Button
                        disabled={true}
                        flat={true}
                        label='Button'
                    />
                </div>
            </div>
        );
    }
}

export default Buttons;
