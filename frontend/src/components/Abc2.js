import './style3.scss';
import React,{Component} from 'react';
import img1 from './images/pic1.jpg';
class Abc2 extends Component {
    constructor(props) {
            super(props);
            this.state = {
                open: false,
                mouseOver: false
            };
            // Bind properties to class instance
            this._clickHandler = this._clickHandler.bind(this);
            this._mouseEnter = this._mouseEnter.bind(this);
            this._mouseLeave = this._mouseLeave.bind(this);
        }
        // Event handlers to modify state values
    _mouseEnter(e) {
        e.preventDefault();
        if (this.state.mouseOver === false) {
            console.log(this.props.data.name);
            this.setState({
                mouseOver: true
            })
        }
    }
    _mouseLeave(e) {
        e.preventDefault();
        if (this.state.mouseOver === true) {
            this.setState({
                mouseOver: false
            })
        }
    }
    _clickHandler(e) {
        e.preventDefault();
        if (this.state.open === false) {
            this.setState({
                open: true
            });
        } else {
            this.setState({
                open: false
            });
        }
    }

    render() {
        // Modify styles based on state values
        let tileStyle = {};
        let headerStyle = {};
        let zoom = {};
        // When tile clicked
        if (this.state.open) {
            tileStyle = {
                width: '60vw',
                height: '40vw',
                position: 'absolute',
                top: '50%',
                left: '50%',
                margin: '0',
                marginTop: '-20vw',
                marginLeft: '-31vw',
                boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
                transform: 'none'
            };
        } else {
            tileStyle = {
                width: '18vw',
                height: '18vw'
            };
        }

        return (
            <div className="tile">
                <label htmlFor="bedroom">
                <img
                    onMouseEnter={this._mouseEnter}
                    onMouseLeave={this._mouseLeave}
                    onClick={this._clickHandler}
                    src={this.props.data.image}
                    alt={this.props.data.name}
                    style={tileStyle}
                />
                </label>
            </div>
        );
    }
}

export default Abc2;