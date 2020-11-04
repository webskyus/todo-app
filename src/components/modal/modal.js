import React, {Component} from 'react'
import './modal.css'
import velocity from 'velocity-animate'
import Modal from 'react-uikit-modal'


export default class ModalInner extends Component {
    state = {
        show: false,
        label: '',
        description: ''
    }


    animateIn (modal, dialog) {
        this.setState({show: true});
        velocity(modal, {opacity: 1}, {display: 'block'}, 300);
        velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
    }

    animateOut (modal, dialog) {
        this.setState({show: false});
        velocity(modal, {opacity:0}, { display: 'none' }, 300);
        velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
    }

    onLabelInputChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onDescrInputChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }


    addItem = (e) => {
        e.preventDefault()
        if (this.state.label.length >= 4 && this.state.description.length >= 4) {
            this.props.onItemAdd(this.state.label, this.state.description)
            e.target.querySelector('[type="submit"]').setAttribute(
                'data-kitid',
                'modal-ckgxaugsm00033b61lc9krtw5')

            e.target.querySelector('[type="submit"]').click()

            e.target.querySelector('[type="submit"]').setAttribute(
                'data-kitid',
                '')
        }
    }

    render() {
        return (
            <Modal
                close
                show={this.state.show}
                trigger={{
                    body: '',
                    type: 'button',
                    className: 'add-new-item-btn',
                    animate: {
                        in: (modal, dialog) => this.animateIn(modal, dialog),
                        out: (modal, dialog) => this.animateOut(modal, dialog)
                    }
                }}
            >
                <form
                    onSubmit={this.addItem}
                    className="modal-wrapper">
                    <h2 className="uk-article-title mt0">Form for added new element intro todo list</h2>
                    <div className="uk-margin">
                        <legend className="uk-legend pb15">Items title</legend>
                        <input
                            onChange={this.onLabelInputChange}
                            className="uk-input"
                            type="text"
                            defaultValue={this.state.label}
                            placeholder="Make app today"
                            />
                    </div>
                    <div className="uk-margin">
                        <legend className="uk-legend pb15">Intro description</legend>
                        <textarea
                            onChange={this.onDescrInputChange}
                            className="uk-textarea"
                            defaultValue={this.state.descr}
                            rows="5"
                            placeholder="So first i need make..."/>
                    </div>
                    <p className="uk-text-right">
                        <button
                            data-kitid="modal-ckgxaugsm00033b61lc9krtw5"
                            className="uk-button uk-button-outline" type="button">Cancel</button>
                        <button
                            className="uk-button uk-button-primary" type="submit">Add item</button>
                    </p>
                </form>
            </Modal>
        )
    }
}